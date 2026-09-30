import { createHash } from "node:crypto";
import { readdir, readFile, stat } from "node:fs/promises";
import { extname, join, relative, resolve, sep } from "node:path";

// 使い方: npm run --silent compare -- ./base/out ./head/out
// Next.js の静的エクスポート同士を比較し、変更のあるページの URL を JSON で出力する。
// この値は next.config.ts の basePath と、CD.yml の配置先に合わせる。
const BASE_PATH = "/2026";
// HTML に直接現れるアセット参照と、CSS 内の url(...) をたどる。
const HTML_ATTRIBUTES = /\b(?:src|href|poster|srcset)="([^"]+)"/gi;
const CSS_URLS = /url\(\s*["']?([^"')]+)["']?\s*\)/gi;

type ExportedSite = {
  root: string;
  files: Map<string, string>;
  digests: Map<string, string>;
};

async function listFiles(root: string, dir = root): Promise<string[]> {
  const files: string[] = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) files.push(...(await listFiles(root, path)));
    else if (entry.isFile()) files.push(relative(root, path).split(sep).join("/"));
  }
  return files;
}

async function loadSite(path: string): Promise<ExportedSite> {
  const root = resolve(path);
  if (!(await stat(root)).isDirectory()) throw new Error(`Not a directory: ${root}`);
  const files = new Map<string, string>();
  for (const file of await listFiles(root)) files.set(file, join(root, file));
  return { root, files, digests: new Map() };
}

async function digest(site: ExportedSite, file: string): Promise<string | undefined> {
  const path = site.files.get(file);
  if (!path) return undefined;
  // 同じ CSS や画像を複数ページが参照するので、ファイル内容のハッシュを再利用する。
  const cached = site.digests.get(file);
  if (cached) return cached;
  const hash = createHash("sha256")
    .update(await readFile(path))
    .digest("hex");
  site.digests.set(file, hash);
  return hash;
}

function assetPath(value: string, from: string): string | undefined {
  const raw = value.replaceAll("&amp;", "&").trim().split(/\s/)[0];
  if (!raw || raw.startsWith("data:") || raw.startsWith("#")) return undefined;
  // URL として解決すると、CSS の相対パスと HTML の絶対パスを同じ形式で扱える。
  const base = `https://export.invalid${BASE_PATH}/${from}`;
  let url: URL;
  try {
    url = new URL(raw, base);
  } catch {
    return undefined;
  }
  if (url.origin !== "https://export.invalid") return undefined;
  // 外部サイトや別年度のファイルは、比較対象のエクスポートに含まれない。
  if (!url.pathname.startsWith(`${BASE_PATH}/`)) return undefined;
  return decodeURIComponent(url.pathname.slice(BASE_PATH.length + 1));
}

function referencedAssets(content: string, from: string): Set<string> {
  const assets = new Set<string>();
  for (const match of content.matchAll(HTML_ATTRIBUTES)) {
    const values = match[0].toLowerCase().startsWith("srcset") ? match[1].split(",") : [match[1]];
    for (const value of values) {
      const path = assetPath(value, from);
      if (path) assets.add(path);
    }
  }
  for (const match of content.matchAll(CSS_URLS)) {
    const path = assetPath(match[1], from);
    if (path) assets.add(path);
  }
  return assets;
}

async function dependencies(site: ExportedSite, page: string): Promise<Set<string>> {
  const seen = new Set<string>();
  const pending = [page];
  while (pending.length) {
    const file = pending.pop()!;
    if (seen.has(file) || !site.files.has(file)) continue;
    seen.add(file);
    // HTML から参照アセットを集め、CSS からは背景画像などをさらにたどる。
    // JS や画像の中身は URL として解析せず、後でファイル内容を比較する。
    if (file !== page && extname(file) !== ".css") continue;
    const content = await readFile(site.files.get(file)!, "utf8");
    for (const asset of referencedAssets(content, file)) {
      if (site.files.has(asset) && !seen.has(asset)) pending.push(asset);
    }
  }
  seen.delete(page);
  return seen;
}

function pageUrl(file: string): string {
  const path = file.slice(0, -".html".length);
  return path === "index" ? "/" : `/${path.replace(/\/index$/, "")}`;
}

async function changedPages(base: ExportedSite, head: ExportedSite): Promise<string[]> {
  const pages = new Set([...base.files.keys(), ...head.files.keys()].filter((file) => file.endsWith(".html")));
  const changed: string[] = [];
  for (const page of [...pages].sort()) {
    // HTML の差分には、ページ本文やハッシュ付きアセット URL の変更が含まれる。
    // 片方にしか存在しないページも変更として扱う。
    if ((await digest(base, page)) !== (await digest(head, page))) {
      changed.push(pageUrl(page));
      continue;
    }
    // public/ の画像などは内容が変わっても URL が同じなので、HTML が同一でも確認する。
    const assets = new Set([...(await dependencies(base, page)), ...(await dependencies(head, page))]);
    for (const asset of assets) {
      if ((await digest(base, asset)) !== (await digest(head, asset))) {
        changed.push(pageUrl(page));
        break;
      }
    }
  }
  return changed;
}

async function main() {
  const [basePath, headPath] = process.argv.slice(2);
  if (!basePath || !headPath) throw new Error("Usage: npm run compare -- ./base ./head");
  const [base, head] = await Promise.all([loadSite(basePath), loadSite(headPath)]);
  console.log(JSON.stringify({ changed: await changedPages(base, head) }));
}

main().catch((error: unknown) => {
  console.error(error);
  process.exitCode = 1;
});

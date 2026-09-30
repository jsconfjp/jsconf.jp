import { execFileSync } from "node:child_process";
import { mkdtemp, mkdir, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { dirname, join } from "node:path";
import { afterEach, test } from "node:test";
import assert from "node:assert/strict";

const temporaryDirectories: string[] = [];

afterEach(async () => {
  await Promise.all(temporaryDirectories.splice(0).map((dir) => rm(dir, { recursive: true, force: true })));
});

test("reports changed pages, including added and removed pages", async () => {
  const [base, head] = await fixture();
  await put(base, "en.html", "<h1>Before</h1>");
  await put(head, "en.html", "<h1>After</h1>");
  await put(base, "en/old.html", "<h1>Old</h1>");
  await put(head, "en/new.html", "<h1>New</h1>");
  await put(base, "ja.html", "<h1>Same</h1>");
  await put(head, "ja.html", "<h1>Same</h1>");
  await put(base, "404.html", "Old error page");
  await put(head, "404.html", "New error page");

  assert.deepEqual(compare(base, head), { changed: ["/2026/en", "/2026/en/new", "/2026/en/old"] });
});

test("rejects an export copied into a nested out directory", async () => {
  const [base, head] = await fixture();
  await put(base, "en.html", "<h1>Base</h1>");
  await put(head, "out/index.html", "<h1>Head</h1>");

  assert.throws(() => compare(base, head), /Nested out\/ directory/);
});

test("follows page assets without reporting unrelated changes", async () => {
  const [base, head] = await fixture();
  const html = '<link rel="stylesheet" href="/2026/_next/static/style.css"><img src="/2026/speaker/a.png">';
  for (const site of [base, head]) {
    await put(site, "en.html", html);
    await put(site, "ja.html", "<h1>Unrelated</h1>");
    await put(site, "_next/static/style.css", "h1{background:url('/2026/bg.png')}");
    await put(site, "speaker/a.png", "same image");
  }
  await put(base, "bg.png", "before");
  await put(head, "bg.png", "after");
  await put(head, "unused.png", "unrelated");

  assert.deepEqual(compare(base, head), { changed: ["/2026/en"] });
});

async function fixture(): Promise<[string, string]> {
  const root = await mkdtemp(join(tmpdir(), "compare-"));
  temporaryDirectories.push(root);
  const base = join(root, "base");
  const head = join(root, "head");
  await Promise.all([mkdir(base), mkdir(head)]);
  return [base, head];
}

async function put(root: string, path: string, content: string): Promise<void> {
  const file = join(root, path);
  await mkdir(dirname(file), { recursive: true });
  await writeFile(file, content);
}

function compare(base: string, head: string): { changed: string[] } {
  const output = execFileSync(
    process.execPath,
    ["--strip-types", join(import.meta.dirname, "compare.ts"), base, head],
    {
      encoding: "utf8",
    },
  );
  return JSON.parse(output);
}

#!/usr/bin/env node
// Tailwind CSS IntelliSense と同一エンジン (@tailwindcss/language-server) を
// headless で駆動し、診断 (publishDiagnostics) を収集する harness。
//
//   node scripts/tw-lint.mjs            # 観測 + commit ゲート (診断が1件でもあれば exit 1)
//   node scripts/tw-lint.mjs --json     # 生の診断を JSON で出力
//   node scripts/tw-lint.mjs --fix      # LS の code action (quick fix) を適用して自動修正
//
// suggestCanonicalClasses など IntelliSense と同じ診断をそのまま使うため、
// ルールの再実装ではなく「公式エンジンの出力」を真実として扱える。

import { spawn } from "node:child_process";
import { readFileSync, writeFileSync, readdirSync } from "node:fs";
import path from "node:path";
import { pathToFileURL, fileURLToPath } from "node:url";

const ROOT = path.resolve(import.meta.dirname, "..");
const LS_BIN = path.join(
  ROOT,
  "node_modules",
  ".bin",
  "tailwindcss-language-server",
);

const MODE = process.argv.includes("--fix")
  ? "fix"
  : process.argv.includes("--json")
    ? "json"
    : "check";

// IntelliSense と揃える lint 設定。ここが commit ゲートの「ルール定義」になる。
const TAILWIND_SETTINGS = {
  validate: true,
  classAttributes: ["class", "className", "ngClass", "class:list"],
  classFunctions: ["clsx", "cva", "cn", "tw", "twMerge", "tv"],
  lint: {
    cssConflict: "warning",
    invalidApply: "error",
    invalidScreen: "error",
    invalidVariant: "error",
    invalidConfigPath: "error",
    invalidTailwindDirective: "error",
    recommendedVariantOrder: "warning",
    suggestCanonicalClasses: "warning",
  },
};

const LANGUAGE_ID = {
  ".tsx": "typescriptreact",
  ".ts": "typescript",
  ".jsx": "javascriptreact",
  ".js": "javascript",
  ".mjs": "javascript",
  ".mdx": "mdx",
  ".css": "css",
  ".html": "html",
};

const SEVERITY = { 1: "error", 2: "warning", 3: "info", 4: "hint" };

function collectFiles(dir) {
  const out = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (["node_modules", ".next", "out", "dist", "build"].includes(entry.name))
        continue;
      out.push(...collectFiles(full));
    } else if (LANGUAGE_ID[path.extname(entry.name)]) {
      out.push(full);
    }
  }
  return out;
}

// --- 最小 LSP クライアント (stdio / Content-Length フレーミング) ---
class LSPClient {
  #proc;
  #buf = Buffer.alloc(0);
  #nextId = 1;
  #pending = new Map();
  #onNotify;

  constructor(bin, args, onNotify) {
    this.#onNotify = onNotify;
    this.#proc = spawn(bin, args, { cwd: ROOT, stdio: ["pipe", "pipe", "pipe"] });
    this.#proc.stdout.on("data", (chunk) => this.#onData(chunk));
    this.#proc.stderr.on("data", () => {}); // LS の進捗ログは捨てる
  }

  #onData(chunk) {
    this.#buf = Buffer.concat([this.#buf, chunk]);
    for (;;) {
      const headerEnd = this.#buf.indexOf("\r\n\r\n");
      if (headerEnd === -1) return;
      const header = this.#buf.toString("utf8", 0, headerEnd);
      const m = /Content-Length: (\d+)/i.exec(header);
      if (!m) {
        this.#buf = this.#buf.subarray(headerEnd + 4);
        continue;
      }
      const len = Number(m[1]);
      const start = headerEnd + 4;
      if (this.#buf.length < start + len) return;
      const body = this.#buf.toString("utf8", start, start + len);
      this.#buf = this.#buf.subarray(start + len);
      this.#dispatch(JSON.parse(body));
    }
  }

  #dispatch(msg) {
    if (msg.id !== undefined && (msg.result !== undefined || msg.error !== undefined)) {
      // 自分が送った request への response
      const p = this.#pending.get(msg.id);
      if (p) {
        this.#pending.delete(msg.id);
        if (msg.error) p.reject(msg.error);
        else p.resolve(msg.result);
      }
      return;
    }
    if (msg.method && msg.id !== undefined) {
      // server -> client の request。設定要求などに応える
      this.#onServerRequest(msg);
      return;
    }
    if (msg.method) this.#onNotify?.(msg); // notification
  }

  #onServerRequest(msg) {
    let result = null;
    if (msg.method === "workspace/configuration") {
      result = msg.params.items.map((item) =>
        item.section === "tailwindCSS"
          ? TAILWIND_SETTINGS
          : item.section === "editor"
            ? { tabSize: 2 }
            : {},
      );
    } else if (msg.method === "workspace/workspaceFolders") {
      result = [{ uri: pathToFileURL(ROOT).href, name: "root" }];
    }
    // client/registerCapability, window/workDoneProgress/create 等は result=null で OK
    this.#send({ jsonrpc: "2.0", id: msg.id, result });
  }

  #send(obj) {
    const body = JSON.stringify(obj);
    this.#proc.stdin.write(`Content-Length: ${Buffer.byteLength(body)}\r\n\r\n${body}`);
  }

  request(method, params) {
    const id = this.#nextId++;
    return new Promise((resolve, reject) => {
      this.#pending.set(id, { resolve, reject });
      this.#send({ jsonrpc: "2.0", id, method, params });
    });
  }

  notify(method, params) {
    this.#send({ jsonrpc: "2.0", method, params });
  }

  dispose() {
    this.#proc.kill();
  }
}

async function main() {
  const files = collectFiles(path.join(ROOT, "src"));
  files.push(path.join(ROOT, "mdx-components.tsx"));

  const diagnostics = new Map(); // uri -> Diagnostic[]
  let lastMessageAt = Date.now();

  const client = new LSPClient(LS_BIN, ["--stdio"], (msg) => {
    lastMessageAt = Date.now();
    if (msg.method === "textDocument/publishDiagnostics") {
      diagnostics.set(msg.params.uri, msg.params.diagnostics);
    }
  });

  await client.request("initialize", {
    processId: process.pid,
    rootUri: pathToFileURL(ROOT).href,
    workspaceFolders: [{ uri: pathToFileURL(ROOT).href, name: "root" }],
    capabilities: {
      workspace: {
        configuration: true,
        didChangeConfiguration: { dynamicRegistration: true },
        workspaceFolders: true,
      },
      textDocument: {
        publishDiagnostics: { relatedInformation: true, dataSupport: true },
        codeAction: {
          codeActionLiteralSupport: {
            codeActionKind: { valueSet: ["quickfix", "source.fixAll"] },
          },
          dataSupport: true,
          resolveSupport: { properties: ["edit"] },
        },
      },
    },
    initializationOptions: { configuration: { tailwindCSS: TAILWIND_SETTINGS } },
  });
  client.notify("initialized", {});

  for (const file of files) {
    const ext = path.extname(file);
    client.notify("textDocument/didOpen", {
      textDocument: {
        uri: pathToFileURL(file).href,
        languageId: LANGUAGE_ID[ext],
        version: 1,
        text: readFileSync(file, "utf8"),
      },
    });
  }

  // LS はプロジェクト初期化後に非同期で診断を返すので、メッセージが
  // 一定時間止まる (= 落ち着いた) まで待つ。全体タイムアウトも併用。
  const SETTLE_MS = 2500;
  const TIMEOUT_MS = 60000;
  const startedAt = Date.now();
  await new Promise((resolve) => {
    const timer = setInterval(() => {
      if (
        Date.now() - lastMessageAt > SETTLE_MS ||
        Date.now() - startedAt > TIMEOUT_MS
      ) {
        clearInterval(timer);
        resolve();
      }
    }, 250);
  });

  const flat = [];
  for (const [uri, diags] of diagnostics) {
    for (const d of diags) {
      flat.push({
        file: path.relative(ROOT, fileURLToPath(uri)),
        line: d.range.start.line + 1,
        col: d.range.start.character + 1,
        severity: SEVERITY[d.severity] ?? "info",
        code: d.code ?? "",
        message: d.message,
        uri,
        range: d.range,
        data: d.data,
      });
    }
  }
  flat.sort((a, b) => a.file.localeCompare(b.file) || a.line - b.line);

  if (MODE === "json") {
    console.log(JSON.stringify(flat, null, 2));
    client.dispose();
    return;
  }

  if (MODE === "fix") {
    await applyFixes(client, diagnostics);
    client.dispose();
    return;
  }

  // check モード
  if (flat.length === 0) {
    console.log("✓ Tailwind diagnostics: 0 件");
    client.dispose();
    return;
  }
  console.error(`✗ Tailwind diagnostics: ${flat.length} 件\n`);
  for (const d of flat) {
    console.error(
      `  ${d.file}:${d.line}:${d.col}  ${d.severity}  [${d.code}]  ${d.message}`,
    );
  }
  client.dispose();
  process.exitCode = 1;
}

async function applyFixes(client, diagnostics) {
  // 各診断について LS に quick fix を要求し、返ってきた TextEdit を適用する。
  // ファイル単位で後ろから適用してオフセットずれを避ける。
  const editsByFile = new Map(); // absPath -> {range, newText}[]
  for (const [uri, diags] of diagnostics) {
    if (diags.length === 0) continue;
    for (const diag of diags) {
      const actions = await client.request("textDocument/codeAction", {
        textDocument: { uri },
        range: diag.range,
        context: { diagnostics: [diag], only: ["quickfix"] },
      });
      const action = (actions ?? []).find((a) => a.edit || a.kind === "quickfix");
      if (!action) continue;
      let edit = action.edit;
      if (!edit && action.data) {
        const resolved = await client.request("codeAction/resolve", action);
        edit = resolved?.edit;
      }
      const changes = edit?.changes?.[uri] ?? edit?.documentChanges
        ?.filter((c) => c.textDocument?.uri === uri)
        .flatMap((c) => c.edits) ?? [];
      if (!changes.length) continue;
      const abs = fileURLToPath(uri);
      if (!editsByFile.has(abs)) editsByFile.set(abs, []);
      editsByFile.get(abs).push(...changes);
    }
  }

  let fixedFiles = 0;
  for (const [abs, edits] of editsByFile) {
    const text = readFileSync(abs, "utf8");
    const lines = text.split("\n");
    // offset 計算用
    const toOffset = (pos) =>
      lines.slice(0, pos.line).reduce((n, l) => n + l.length + 1, 0) +
      pos.character;
    const sorted = edits
      .map((e) => ({ start: toOffset(e.range.start), end: toOffset(e.range.end), newText: e.newText }))
      .sort((a, b) => b.start - a.start);
    let next = text;
    for (const e of sorted) {
      next = next.slice(0, e.start) + e.newText + next.slice(e.end);
    }
    if (next !== text) {
      writeFileSync(abs, next);
      fixedFiles++;
      console.log(`fixed: ${path.relative(ROOT, abs)} (${edits.length} edits)`);
    }
  }
  console.log(`\n${fixedFiles} ファイルを修正しました。再度 check を実行してください。`);
}

main();

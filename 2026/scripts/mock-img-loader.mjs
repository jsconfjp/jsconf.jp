import path from "node:path";
import { readFile } from "node:fs/promises";

const imageExtensions = [".png", ".jpg", ".jpeg", ".gif", ".svg", ".webp"];

export async function load(url, context, defaultLoad) {
  const ext = path.extname(url);
  if (imageExtensions.includes(ext)) {
    return {
      format: "module",
      source: `export default "${url}";`,
      shortCircuit: true,
    };
  }
  if (ext === ".json") {
    const source = await readFile(new URL(url), "utf8");
    return {
      format: "module",
      source: `export default ${source};`,
      shortCircuit: true,
    };
  }
  return defaultLoad(url, context, defaultLoad);
}

import path from "node:path";

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
  return defaultLoad(url, context, defaultLoad);
}

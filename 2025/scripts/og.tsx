// https://github.com/tskaigi/tskaigi2025-web-site/blob/develop/src/scripts/ogp/generate-image.tsx
// import { TalkThumbnail } from "../src/components/og/TalkThumbnail";
import { General } from "../src/components/og/General";
import { writeFile } from "node:fs/promises";
import React from "react";
import { join } from "node:path";
import { generateImage } from "@/lib/og/image";

main();

async function main() {
  const res = await generateImage(<General />);
  const buffer = await res.arrayBuffer();
  const uint8Array = new Uint8Array(buffer);
  await writeFile(
    join(__dirname, "..", "src", "assets", "ogp.png"),
    uint8Array
  );
}

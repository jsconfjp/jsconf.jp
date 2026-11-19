import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

const DIR_FONTS = join(process.cwd(), "public", "fonts");

export async function generateImage(children: React.ReactElement) {
  const [notoSans400, notoSans700] = await Promise.all([
    readFile(join(DIR_FONTS, "NotoSansJP-Regular.ttf")),
    readFile(join(DIR_FONTS, "NotoSansJP-Bold.ttf")),
  ]);

  return new ImageResponse(children, {
    width: 1200,
    height: 630,
    fonts: [
      {
        name: "Noto Sans JP",
        data: notoSans400,
        style: "normal",
        weight: 400,
      },
      {
        name: "Noto Sans JP",
        data: notoSans700,
        style: "normal",
        weight: 700,
      },
    ],
  });
}

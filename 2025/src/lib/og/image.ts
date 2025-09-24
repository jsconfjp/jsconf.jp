import { ImageResponse } from "next/og";
import { loadGoogleFonts } from "./font";

export async function generateImage(children: React.ReactElement) {
  const [notoSans400, notoSans700] = await loadGoogleFonts(
    [
      { family: "Noto Sans JP", weight: 400 },
      { family: "Noto Sans JP", weight: 700 },
    ],
    { maxRetries: 3 },
  );

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

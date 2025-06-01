import { ImageResponse } from "next/og";
import { loadGoogleFont } from "./font";

export async function generateImage(children: React.ReactElement) {
  const [notoSans400, notoSans700] = await Promise.all([
    loadGoogleFont({
      family: "Noto Sans JP",
      weight: 400,
    }),
    loadGoogleFont({
      family: "Noto Sans JP",
      weight: 700,
    }),
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

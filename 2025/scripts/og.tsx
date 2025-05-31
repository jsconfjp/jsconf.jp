// https://github.com/tskaigi/tskaigi2025-web-site/blob/develop/src/scripts/ogp/generate-image.tsx
import { TalkThumbnail } from "@/components/og/TalkThumbnail";
import { ImageResponse } from "@vercel/og";
import { writeFile } from "node:fs/promises";
import React from "react";

async function loadGoogleFont({
  family,
  weight,
  text,
}: {
  family: string;
  weight: number;
  text?: string;
}) {
  const params = new URLSearchParams({
    family: `${family}${weight ? `:wght@${weight}` : ""}`,
  });
  if (text) {
    params.append("text", text);
  } else {
    params.append("subset", "latin");
  }

  const url = `https://fonts.googleapis.com/css2?${params.toString()}`;
  const css = await fetch(url).then((res) => res.text());
  const fontUrl = css.match(
    /src: url\((.+)\) format\('(opentype|truetype)'\)/
  )?.[1];
  if (!fontUrl) {
    throw new Error("Font file not found in CSS fetched from Google Fonts");
  }

  return fetch(fontUrl).then((res) => res.arrayBuffer());
}

export async function generateImage() {
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

  return new ImageResponse(
    (
      <TalkThumbnail
        talk={{
          title: "Talk title",
          track: "A",
          startTime: "10:30",
          endTime: "11:20",
          language: "English",
          speakers: [
            {
              name: "Leko",
              avatarUrl: "https://github.com/Leko.png",
            },
          ],
        }}
      />
    ),
    {
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
    }
  );
}

main();

async function main() {
  const res = await generateImage();
  const buffer = await res.arrayBuffer();
  const uint8Array = new Uint8Array(buffer);
  await writeFile("tmp.png", uint8Array);
}

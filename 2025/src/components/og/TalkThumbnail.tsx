// OGPではimg要素しか使えないため警告を無視
/* eslint-disable @next/next/no-img-element */
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { StaticImageData } from "next/image";
import React from "react";
import en from "@/../messages/en.json";
import { ScheduledSession } from "@/constants/schedule";
import { Chip } from "./Chip";
import { Logo } from "./Logo";
import { Template } from "./Template";

const DIR_NEXT = join(process.cwd(), ".next");

type Props = {
  session: ScheduledSession & { kind: "talk" };
};

const toImageSrc = (src: string | StaticImageData) => {
  if (typeof src === "string") {
    return src;
  }
  // ビルド中のURLは実際のパスとは異なるため置き換え
  const parts = src.src.split("/");
  const absPath = join(
    DIR_NEXT,
    parts.slice(parts.indexOf("_next") + 1).join("/")
  );
  const avatarUrl = readFileSync(absPath, { encoding: "base64" });
  if (src.src.endsWith(".jpg")) {
    return `data:image/jpeg;base64,${avatarUrl}`;
  }
  if (src.src.endsWith(".png")) {
    return `data:image/png;base64,${avatarUrl}`;
  }
  if (src.src.endsWith(".svg")) {
    return `data:image/svg+xml;base64,${avatarUrl}`;
  }
  throw new Error(`Unsupported image format: ${src.src}`);
};

export function TalkThumbnail({ session }: Props) {
  const { talk } = session;

  return (
    <Template>
      <div tw="flex-1 flex flex-col rounded-xl bg-white shadow-md">
        <main tw="flex-1 px-16 flex flex-col items-center justify-center">
          <h1 tw="text-7xl font-bold" style={{ lineHeight: "1.2" }}>
            {talk.title}
          </h1>
          <div tw="flex items-center" style={{ gap: 8 }}>
            {session.track !== "all" && (
              <Chip track={session.track}>Track {session.track}</Chip>
            )}
            <Chip>
              {session.startTime}-{session.endTime}
            </Chip>
            <Chip>{talk.language}</Chip>
          </div>
        </main>
        <footer tw="flex items-end justify-between px-8 pb-8">
          <div tw="flex flex-col">
            {talk.speakers.map((speaker) => (
              <div
                key={speaker.name}
                tw="flex items-center"
                style={{ gap: 16 }}
              >
                {speaker.type === "speaker" ? (
                  <img
                    alt={speaker.name}
                    src={toImageSrc(speaker.avatarUrl)}
                    width={120 / talk.speakers.length}
                    height={120 / talk.speakers.length}
                    tw="rounded-full"
                    style={{ objectFit: "cover" }}
                  />
                ) : (
                  <img
                    alt={speaker.name}
                    src={toImageSrc(speaker.logoUrl)}
                    width={120 / talk.speakers.length}
                    height={120 / talk.speakers.length}
                    style={{ objectFit: "contain" }}
                  />
                )}
                <h2 tw="text-5xl font-bold">{speaker.name}</h2>
              </div>
            ))}
          </div>
          <div tw="flex items-center" style={{ gap: 16 }}>
            <Logo size={80} />
            <h2 tw="text-4xl font-bold">{en.about.title}</h2>
          </div>
        </footer>
      </div>
    </Template>
  );
}

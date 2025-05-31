// OGPではimg要素しか使えないため警告を無視
/* eslint-disable @next/next/no-img-element */
import en from "@/../messages/en.json";
import React from "react";
import { Chip } from "./Chip";
import { Talk } from "@/constants/talks";
import { Template } from "./Template";
import { Logo } from "./Logo";

type Props = {
  talk: Talk;
};

export function TalkThumbnail({ talk }: Props) {
  return (
    <Template>
      <div tw="flex-1 flex flex-col rounded-xl bg-white shadow-md">
        <main tw="flex-1 px-16 flex flex-col items-center justify-center">
          <h1 tw="text-7xl font-bold" style={{ lineHeight: "1.3" }}>
            {talk.title}
          </h1>
          <div tw="flex items-center" style={{ gap: 8 }}>
            <Chip track={talk.track}>Track {talk.track}</Chip>
            <Chip>
              {talk.startTime}-{talk.endTime}
            </Chip>
            <Chip>{talk.language}</Chip>
          </div>
        </main>
        <footer tw="flex items-end justify-between p-8">
          <div tw="flex flex-col">
            {talk.speakers.map((speaker) => (
              <div
                tw="flex items-center"
                key={speaker.name}
                style={{ gap: 16 }}
              >
                <img
                  alt={speaker.name}
                  src={speaker.avatarUrl}
                  width={120 / talk.speakers.length}
                  height={120 / talk.speakers.length}
                  tw="rounded-full"
                />
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

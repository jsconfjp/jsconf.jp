// OGPではimg要素しか使えないため警告を無視
/* eslint-disable @next/next/no-img-element */
import React from "react";
import en from "@/../messages/en.json";
import { ScheduledSession } from "@/constants/schedule";
import { Chip } from "./Chip";
import { Logo } from "./Logo";
import { Template } from "./Template";

type Props = {
  session: ScheduledSession & { kind: "talk" };
};

export function TalkThumbnail({ session }: Props) {
  const { talk } = session;

  return (
    <Template>
      <div tw="flex-1 flex flex-col rounded-xl bg-white shadow-md">
        <main tw="flex-1 px-16 flex flex-col items-center justify-center">
          <h1 tw="text-7xl font-bold" style={{ lineHeight: "1.3" }}>
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
                  src={
                    speaker.type === "speaker"
                      ? speaker.avatarUrl
                      : speaker.logoUrl
                  }
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

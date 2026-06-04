import type { StaticImageData } from "next/image";
// @ts-expect-error see 2026/scripts/fetch-og-images.ts
import { type Sponsor } from "./sponsors.ts";

type Day = "1";
type Kind = "keynote" | "session" | "LT" | "sponsor session" | "sponsor LT";
type Language = "English" | "Japanese";

type Speaker = {
  type: "speaker";
  name: string;
  avatarUrl: string | StaticImageData;
  bio: string; // markdown
};

export type Talk = {
  slug: string;
  title: string;
  description: string; // markdown
  kind: Kind;
  day: Day;
  language: Language;
  speakers: (Speaker | Sponsor)[];
  recordingUrl?: string;
};
export type FlattenedSpeaker = {
  talk: Talk;
  speaker: Speaker | Sponsor;
};

// 登壇は募集中（CFP）のため未確定。確定次第ここに追加する。
export const TALKS: readonly Talk[] = [];

export type TalkSlug = (typeof TALKS)[number]["slug"];

export const TALKS_BY_SLUG: Record<TalkSlug, Talk> = TALKS.reduce(
  (acc, talk) => {
    acc[talk.slug as TalkSlug] = talk;
    return acc;
  },
  {} as Record<TalkSlug, Talk>,
);

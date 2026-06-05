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

// 登壇は募集中（CFP）のため未確定。
// /talks/[slug] と /schedule を output: export で成立させるためのプレースホルダを1件だけ置く。
// speakers は空にして /speakers には出さない。確定後に実データへ置き換える。
export const TALKS: readonly Talk[] = [
  {
    slug: "tba",
    title: "Coming Soon",
    description: "セッション情報は近日公開予定です。Stay tuned!",
    kind: "session",
    day: "1",
    language: "Japanese",
    speakers: [],
  },
];

export type TalkSlug = (typeof TALKS)[number]["slug"];

export const TALKS_BY_SLUG: Record<TalkSlug, Talk> = TALKS.reduce(
  (acc, talk) => {
    acc[talk.slug as TalkSlug] = talk;
    return acc;
  },
  {} as Record<TalkSlug, Talk>,
);

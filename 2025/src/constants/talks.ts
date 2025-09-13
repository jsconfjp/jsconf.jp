import { Sponsor } from "./sponsors";

type Day = "1";
type Kind = "keynote" | "session" | "LT" | "sponsor session" | "sponsor LT";
type Language = "English" | "Japanese";

export type Speaker = {
  type: "speaker";
  name: string;
  avatarUrl: string;
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
};
export type FlattenedSpeaker = {
  talk: Talk;
  speaker: Speaker | Sponsor;
};

export const TALKS = [
  {
    slug: "sample-talk-1",
    title: "Sample talk 1",
    description: "# Sample talk 1\n\nSample talk 1 is a sample talk.",
    kind: "session",
    day: "1",
    language: "English",
    speakers: [
      {
        type: "speaker",
        name: "Sample speaker 1",
        avatarUrl: "https://placehold.jp/250x250.png",
        bio: "# Sample speaker 1\n\nSample speaker 1 is a sample speaker.",
      },
      {
        type: "speaker",
        name: "Sample speaker 2",
        avatarUrl: "https://placehold.jp/300x250.png",
        bio: "# Sample speaker 2\n\nSample speaker 2 is a sample speaker.",
      },
    ],
  },
  {
    slug: "sample-talk-2",
    title: "Sample talk 2",
    description: "# Sample talk 2\n\nSample talk 2 is a sample talk.",
    kind: "session",
    day: "1",
    language: "English",
    speakers: [
      {
        type: "speaker",
        name: "Sample speaker 2",
        avatarUrl: "https://placehold.jp/300x250.png",
        bio: "# Sample speaker 2\n\nSample speaker 2 is a sample speaker.",
      },
    ],
  },
  {
    slug: "sample-keynote",
    title: "Sample keynote",
    description: "# Sample keynote\n\nSample keynote is a sample keynote.",
    kind: "keynote",
    day: "1",
    language: "English",
    speakers: [
      {
        type: "speaker",
        name: "Sample speaker 1",
        avatarUrl: "https://placehold.jp/250x250.png",
        bio: "# Sample speaker 1\n\nSample speaker 1 is a sample speaker.",
      },
    ],
  },
  {
    slug: "sample-lt",
    title: "Sample LT",
    description: "# Sample LT\n\nSample LT is a sample LT.",
    kind: "LT",
    day: "1",
    language: "English",
    speakers: [
      {
        type: "speaker",
        name: "Sample speaker 1",
        avatarUrl: "https://placehold.jp/250x250.png",
        bio: "# Sample speaker 1\n\nSample speaker 1 is a sample speaker.",
      },
    ],
  },
  {
    slug: "sample-sponsor-session",
    title: "Sample sponsor session",
    description:
      "# Sample sponsor session\n\nSample sponsor session is a sample sponsor session.",
    kind: "sponsor session",
    day: "1",
    language: "English",
    speakers: [
      {
        type: "sponsor",
        name: "Sample sponsor",
        url: "https://sample.com",
        prText: "Sample sponsor is a sample sponsor.",
        logoUrl: "https://placehold.jp/250x250.png",
        plan: "sponsor",
      },
    ],
  },
  {
    slug: "sample-sponsor-lt",
    title: "Sample sponsor LT",
    description:
      "# Sample sponsor LT\n\nSample sponsor LT is a sample sponsor LT.",
    kind: "sponsor LT",
    day: "1",
    language: "English",
    speakers: [
      {
        type: "sponsor",
        name: "Sample sponsor",
        url: "https://sample.com",
        prText: "Sample sponsor is a sample sponsor.",
        logoUrl: "https://placehold.jp/250x250.png",
        plan: "sponsor",
      },
    ],
  },
] as const satisfies Talk[];

export type TalkSlug = (typeof TALKS)[number]["slug"];

export const TALKS_BY_SLUG: Record<TalkSlug, Talk> = TALKS.reduce(
  (acc, talk) => {
    acc[talk.slug as TalkSlug] = talk;
    return acc;
  },
  {} as Record<TalkSlug, Talk>
);

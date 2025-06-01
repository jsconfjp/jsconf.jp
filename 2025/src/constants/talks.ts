import { Sponsor } from "./sponsors";

type Day = "1";
type Kind = "keynote" | "session" | "LT" | "sponsor session" | "sponsor LT";
type Track = "A" | "B" | "C" | "D";
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
  track: Track;
  day: Day;
  startTime: string;
  endTime: string;
  language: Language;
  speakers: (Speaker | Sponsor)[];
};
export type FlattenedSpeaker = {
  talk: Talk;
  speaker: Speaker | Sponsor;
};

export const TALKS: Talk[] = [
  {
    slug: "sample-talk-1",
    title: "Sample talk 1",
    description: "# Sample talk 1\n\nSample talk 1 is a sample talk.",
    kind: "session",
    track: "A",
    day: "1",
    startTime: "10:00",
    endTime: "11:00",
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
    track: "B",
    day: "1",
    startTime: "11:00",
    endTime: "12:00",
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
];

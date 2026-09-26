import { timeToMinutes } from "@/lib/timeToMinutes";
import { TALKS_BY_SLUG, Talk, TalkSlug } from "./talks";

type Day = "1";
export type Track = "A" | "B" | "C" | "D" | "all";
type TrackOnly = Exclude<Track, "all">;
type EventKind = "reception" | "opening" | "closed" | "break" | "closing" | "networking" | "tba";

export const TRACKS = ["A", "B", "C", "D"] satisfies Track[];

export type ScheduledSession = {
  track: Track;
  day: Day;
  startTime: string;
  endTime: string;
} & (
  | {
      kind: "talk";
      talk: Talk;
    }
  | {
      kind: "streaming";
      talk: Talk;
    }
  | {
      kind: EventKind;
      label?: string;
    }
);

export type TalkSession = Extract<ScheduledSession, { kind: "talk" }>;

const talkSession = (track: TrackOnly, startTime: string, endTime: string, slug: TalkSlug): ScheduledSession => ({
  kind: "talk",
  track,
  day: "1",
  startTime,
  endTime,
  talk: TALKS_BY_SLUG[slug],
});

const eventSession = (
  kind: EventKind,
  track: Track,
  startTime: string,
  endTime: string,
  label?: string,
): ScheduledSession => ({
  kind,
  track,
  day: "1",
  startTime,
  endTime,
  label,
});

const trackTalks = (startTime: string, endTime: string, slugs: readonly [TalkSlug, TalkSlug, TalkSlug, TalkSlug]) =>
  TRACKS.map((track, index) => talkSession(track, startTime, endTime, slugs[index]!));

const notSortedSchedule: ScheduledSession[] = [
  eventSession("reception", "all", "09:30", "10:00"),
  eventSession("opening", "all", "10:00", "10:10", "オープニング/開場説明"),

  ...trackTalks("10:10", "10:20", ["ajay-upreti", "azukiazusa", "bicstone", "dynamis"]),
  ...trackTalks("10:20", "10:30", ["nurul-sundarani", "keisuke-tsuji", "yuya-inoue", "progfay"]),
  ...trackTalks("10:30", "10:40", ["rikito-taniguchi", "tomikawa-sotaro", "syumai", "yebis0942"]),
  eventSession("tba", "A", "10:40", "10:50"),
  talkSession("B", "10:40", "10:50", "kazuya-serizawa"),
  talkSession("C", "10:40", "10:50", "petamoriken"),
  talkSession("D", "10:40", "10:50", "yuta-ikeoku"),

  eventSession("break", "all", "10:50", "11:00"),

  talkSession("A", "11:00", "11:45", "keynote-1-tbd"),

  talkSession("A", "11:45", "11:50", "miidas-sponsor-lt-1"),
  talkSession("A", "11:50", "11:55", "anotherball-sponsor-lt-1"),
  talkSession("A", "11:55", "12:00", "cybozu-sponsor-lt-1"),
  talkSession("A", "12:00", "12:05", "mcd3-sponsor-lt"),

  eventSession("break", "all", "12:05", "13:00", "昼休憩"),

  eventSession("tba", "A", "13:00", "13:30"),
  talkSession("B", "13:00", "13:30", "nolu"),
  talkSession("C", "13:00", "13:30", "neciu-dan"),
  talkSession("D", "13:00", "13:30", "miidas-sponsor-session"),
  ...trackTalks("13:30", "14:00", ["neeraj-pandey", "yuta-nishi", "aileen-villanueva", "anotherball-sponsor-session"]),
  eventSession("break", "all", "14:00", "14:10"),
  talkSession("A", "14:10", "14:40", "marco-ippolito"),
  talkSession("B", "14:10", "14:40", "uhyo"),
  talkSession("C", "14:10", "14:40", "hong-minhee"),
  talkSession("D", "14:10", "14:40", "cybozu-sponsor-session"),
  ...trackTalks("14:40", "15:10", ["ondrej-zara", "wataru-morita", "html-in-canvas-api", "arkor-sponsor-session"]),
  eventSession("break", "all", "15:10", "15:20"),
  talkSession("A", "15:20", "15:50", "yuji-yamamoto"),
  talkSession("B", "15:20", "15:50", "eiji"),
  talkSession("C", "15:20", "15:50", "kevin-uehara"),
  talkSession("D", "15:20", "15:50", "dwango-sponsor-session"),
  ...trackTalks("15:50", "16:20", [
    "saman-abaasi",
    "roland-richard",
    "enechain-sponsor-session",
    "supateam-sponsor-session",
  ]),
  eventSession("break", "all", "16:20", "16:30"),
  ...trackTalks("16:30", "17:00", ["itai-satati", "akfm-sato", "ncdc-sponsor-session", "lincwell-sponsor-session"]),
  ...trackTalks("17:00", "17:30", [
    "leo-kettmeir",
    "kinocoboy",
    "cougar-sponsor-session",
    "money-forward-sponsor-session",
  ]),
  ...trackTalks("17:30", "18:00", [
    "jessie",
    "gmo-flatt-security-sponsor-session",
    "vercel-sponsor-session",
    "layerx-sponsor-session",
  ]),
  eventSession("break", "all", "18:00", "18:10"),

  talkSession("A", "18:10", "18:15", "arkor-sponsor-lt"),
  talkSession("A", "18:15", "18:20", "dwango-sponsor-lt"),
  talkSession("A", "18:20", "18:25", "supateam-sponsor-lt"),
  talkSession("A", "18:25", "18:30", "lincwell-sponsor-lt"),
  talkSession("A", "18:30", "18:35", "money-forward-sponsor-lt"),
  talkSession("A", "18:35", "18:40", "layerx-sponsor-lt"),
  talkSession("A", "18:40", "18:45", "enechain-sponsor-lt"),
  talkSession("A", "18:45", "18:50", "ncdc-sponsor-lt"),
  talkSession("A", "18:50", "18:55", "cougar-sponsor-lt"),
  talkSession("A", "18:55", "19:00", "vercel-sponsor-lt"),
  talkSession("A", "19:00", "19:05", "gmo-flatt-security-sponsor-lt"),
  talkSession("A", "19:05", "19:10", "everlane-sponsor-lt"),

  eventSession("closed", "A", "19:10", "19:40", "Room A Close (懇親会準備)"),
  talkSession("B", "19:10", "19:40", "josh-junon"),

  eventSession("networking", "all", "19:40", "21:30"),
];

export const SCHEDULE: ScheduledSession[] = notSortedSchedule
  // 時間順、トラック順でソート
  .toSorted((a, b) => {
    const timeCompare = timeToMinutes(a.startTime) - timeToMinutes(b.startTime);
    if (timeCompare !== 0) return timeCompare;

    // 時間が同じ場合はトラックでソート（all < A < B < C < D）
    const trackOrder = { all: 0, A: 1, B: 2, C: 3, D: 4 };
    return trackOrder[a.track as keyof typeof trackOrder] - trackOrder[b.track as keyof typeof trackOrder];
  }) as ScheduledSession[];

import { timeToMinutes } from "@/lib/timeToMinutes";
import { TALKS_BY_SLUG, Talk } from "./talks";

type Day = "1";
export type Track = "A" | "B" | "C" | "D" | "all";

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
      kind:
        | "reception"
        | "opening"
        | "closed"
        | "break"
        | "closing"
        | "networking";
    }
);

export type TalkSession = Extract<ScheduledSession, { kind: "talk" }>;

// 開催スケジュールは未確定。
// 登壇は募集中（CFP）のため、talks.ts のプレースホルダ talk (tba) を
// TALKS_BY_SLUG 経由で1件だけ置き、/talks/[slug] と /schedule を成立させる。確定後に実データへ置き換える。
const notSortedSchedule: ScheduledSession[] = [
  {
    kind: "talk",
    track: "A",
    day: "1",
    startTime: "13:00",
    endTime: "13:40",
    talk: TALKS_BY_SLUG["tba"],
  },
];

export const SCHEDULE: ScheduledSession[] = notSortedSchedule
  // 時間順、トラック順でソート
  .toSorted((a, b) => {
    const timeCompare = timeToMinutes(a.startTime) - timeToMinutes(b.startTime);
    if (timeCompare !== 0) return timeCompare;

    // 時間が同じ場合はトラックでソート（all < A < B < C < D）
    const trackOrder = { all: 0, A: 1, B: 2, C: 3, D: 4 };
    return (
      trackOrder[a.track as keyof typeof trackOrder] -
      trackOrder[b.track as keyof typeof trackOrder]
    );
  }) as ScheduledSession[];

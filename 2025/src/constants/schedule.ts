import { timeToMinutes } from "@/lib/timeToMinutes";
import { Talk, TALKS_BY_SLUG } from "./talks";

type Day = "1";
export type Track = "A" | "B" | "C" | "D" | "all";

export const TRACKS = ["A", "B", "C", "D"] satisfies Track[];

export type SessionKind =
  | "reception"
  | "opening"
  | "talk"
  | "closed"
  | "break"
  | "closing"
  | "networking";

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
      kind:
        | "reception"
        | "opening"
        | "closed"
        | "break"
        | "closing"
        | "networking";
    }
);

export const SCHEDULE: ScheduledSession[] = [
  {
    kind: "reception",
    track: "all",
    day: "1",
    startTime: "09:30",
    endTime: "10:00",
  },
  {
    kind: "opening",
    track: "A",
    day: "1",
    startTime: "10:00",
    endTime: "10:10",
  },
  {
    kind: "opening",
    track: "B",
    day: "1",
    startTime: "10:00",
    endTime: "10:10",
  },
  {
    kind: "opening",
    track: "C",
    day: "1",
    startTime: "10:00",
    endTime: "10:10",
  },
  {
    kind: "closed",
    track: "D",
    day: "1",
    startTime: "10:00",
    endTime: "10:30",
  },
  {
    kind: "talk",
    talk: TALKS_BY_SLUG["sample-lt"],
    track: "A",
    day: "1",
    startTime: "10:10",
    endTime: "10:20",
  },
  {
    kind: "talk",
    talk: TALKS_BY_SLUG["sample-lt"],
    track: "B",
    day: "1",
    startTime: "10:10",
    endTime: "10:20",
  },
  {
    kind: "talk",
    talk: TALKS_BY_SLUG["sample-lt"],
    track: "C",
    day: "1",
    startTime: "10:10",
    endTime: "10:20",
  },
  {
    kind: "talk",
    talk: TALKS_BY_SLUG["sample-lt"],
    track: "A",
    day: "1",
    startTime: "10:20",
    endTime: "10:30",
  },
  {
    kind: "talk",
    talk: TALKS_BY_SLUG["sample-lt"],
    track: "B",
    day: "1",
    startTime: "10:20",
    endTime: "10:30",
  },
  {
    kind: "talk",
    talk: TALKS_BY_SLUG["sample-lt"],
    track: "C",
    day: "1",
    startTime: "10:20",
    endTime: "10:30",
  },
  {
    kind: "break",
    track: "all",
    day: "1",
    startTime: "10:30",
    endTime: "10:40",
  },
  {
    kind: "talk",
    talk: TALKS_BY_SLUG["sample-talk-1"],
    track: "A",
    day: "1",
    startTime: "10:40",
    endTime: "11:10",
  },
  {
    kind: "talk",
    talk: TALKS_BY_SLUG["sample-talk-1"],
    track: "B",
    day: "1",
    startTime: "10:40",
    endTime: "11:10",
  },
  {
    kind: "talk",
    talk: TALKS_BY_SLUG["sample-talk-1"],
    track: "C",
    day: "1",
    startTime: "10:40",
    endTime: "11:10",
  },
  {
    kind: "talk",
    talk: TALKS_BY_SLUG["sample-sponsor-session"],
    track: "D",
    day: "1",
    startTime: "10:40",
    endTime: "11:10",
  },
  {
    kind: "talk",
    talk: TALKS_BY_SLUG["sample-talk-2"],
    track: "A",
    day: "1",
    startTime: "11:10",
    endTime: "11:40",
  },
  {
    kind: "talk",
    talk: TALKS_BY_SLUG["sample-talk-2"],
    track: "B",
    day: "1",
    startTime: "11:10",
    endTime: "11:40",
  },
  {
    kind: "talk",
    talk: TALKS_BY_SLUG["sample-talk-2"],
    track: "C",
    day: "1",
    startTime: "11:10",
    endTime: "11:40",
  },
  {
    kind: "talk",
    talk: TALKS_BY_SLUG["sample-sponsor-session"],
    track: "D",
    day: "1",
    startTime: "11:10",
    endTime: "11:40",
  },
  {
    kind: "break",
    track: "all",
    day: "1",
    startTime: "11:40",
    endTime: "11:50",
  },
  {
    kind: "talk",
    talk: TALKS_BY_SLUG["sample-keynote"],
    track: "A",
    day: "1",
    startTime: "11:50",
    endTime: "12:35",
  },
  {
    kind: "closed",
    track: "B",
    day: "1",
    startTime: "11:50",
    endTime: "12:35",
  },
  {
    kind: "closed",
    track: "C",
    day: "1",
    startTime: "11:50",
    endTime: "12:35",
  },
  {
    kind: "closed",
    track: "D",
    day: "1",
    startTime: "11:50",
    endTime: "12:35",
  },
  {
    kind: "closing",
    track: "all",
    day: "1",
    startTime: "12:35",
    endTime: "12:45",
  },
  {
    kind: "networking",
    track: "all",
    day: "1",
    startTime: "12:45",
    endTime: "14:05",
  },
]
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

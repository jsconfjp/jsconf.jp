import { Talk, TALKS_BY_SLUG } from "./talks";

type Day = "1";
export type Track = "A" | "B" | "C" | "D" | "all";

export type SessionKind =
  | "reception" // 開場（受付中）
  | "opening" // オープニング（開場説明など）
  | "talk" // トーク
  | "closed" // クローズ（利用不可）
  | "break" // 休憩
  | "closing" // クロージング（総括トーク）
  | "networking"; // 懇親会

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
      kind: "reception";
      title: string;
    }
  | {
      kind: "opening";
      title: string;
    }
  | {
      kind: "closed";
      title: string;
    }
  | {
      kind: "break";
      title: string;
    }
  | {
      kind: "closing";
      title: string;
    }
  | {
      kind: "networking";
      title: string;
    }
);

export const SCHEDULE: ScheduledSession[] = [
  // 09:30-10:00: 開場（全トラック共通）
  {
    kind: "reception",
    title: "受付開始",
    track: "all",
    day: "1",
    startTime: "09:30",
    endTime: "10:00",
  },

  // 10:00-10:10: オープニング開場説明（A-Cトラック）
  {
    kind: "opening",
    title: "オープニング・開場説明",
    track: "A",
    day: "1",
    startTime: "10:00",
    endTime: "10:10",
  },
  {
    kind: "opening",
    title: "オープニング・開場説明",
    track: "B",
    day: "1",
    startTime: "10:00",
    endTime: "10:10",
  },
  {
    kind: "opening",
    title: "オープニング・開場説明",
    track: "C",
    day: "1",
    startTime: "10:00",
    endTime: "10:10",
  },
  // Dは10:30までクローズ
  {
    kind: "closed",
    title: "準備中",
    track: "D",
    day: "1",
    startTime: "10:00",
    endTime: "10:30",
  },

  // 10:10-10:20: A-CトラックでLT10分
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

  // 10:20-10:30: A-CトラックでLT10分
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

  // 10:30-10:40: A-D 休憩（全トラック共通）
  {
    kind: "break",
    title: "休憩",
    track: "all",
    day: "1",
    startTime: "10:30",
    endTime: "10:40",
  },

  // 10:40-11:10: A, B, C, Dでそれぞれトーク（30分）
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

  // 11:10-11:40: A, B, C, Dでそれぞれトーク（30分）
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

  // 11:40-11:50: 休憩（全トラック共通）
  {
    kind: "break",
    title: "休憩",
    track: "all",
    day: "1",
    startTime: "11:40",
    endTime: "11:50",
  },

  // 11:50-12:35: Aでキーノートスピーチ（45分）、Dはクローズ
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
    title: "利用不可",
    track: "B",
    day: "1",
    startTime: "11:50",
    endTime: "12:35",
  },
  {
    kind: "closed",
    title: "利用不可",
    track: "C",
    day: "1",
    startTime: "11:50",
    endTime: "12:35",
  },
  {
    kind: "closed",
    title: "利用不可",
    track: "D",
    day: "1",
    startTime: "11:50",
    endTime: "12:35",
  },

  // 12:35-12:45: クロージング（10分）
  {
    kind: "closing",
    title: "クロージング・総括",
    track: "all",
    day: "1",
    startTime: "12:35",
    endTime: "12:45",
  },

  // 12:45-14:05: 懇親会（80分）
  {
    kind: "networking",
    title: "懇親会",
    track: "all",
    day: "1",
    startTime: "12:45",
    endTime: "14:05",
  },
];

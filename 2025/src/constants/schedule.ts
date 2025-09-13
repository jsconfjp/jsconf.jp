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
export type TalkSession = Extract<ScheduledSession, { kind: "talk" }>;

export const SCHEDULE: ScheduledSession[] = [
  // 09:30 - 10:00 開場
  {
    kind: "reception",
    track: "all",
    day: "1",
    startTime: "09:30",
    endTime: "10:00",
  },
  
  // 10:00 - 10:10 オープニング/開場説明
  {
    kind: "opening",
    track: "all",
    day: "1",
    startTime: "10:00",
    endTime: "10:10",
  },
  
  // 10:10 - 10:20 Sessions
  {
    kind: "talk",
    talk: TALKS_BY_SLUG["passwordless-in-production"],
    track: "A",
    day: "1",
    startTime: "10:10",
    endTime: "10:20",
  },
  {
    kind: "talk",
    talk: TALKS_BY_SLUG["understanding-directives-and-build-systems"],
    track: "B",
    day: "1",
    startTime: "10:10",
    endTime: "10:20",
  },
  {
    kind: "talk",
    talk: TALKS_BY_SLUG["visual-regression-testing-chromatic"],
    track: "C",
    day: "1",
    startTime: "10:10",
    endTime: "10:20",
  },
  {
    kind: "talk",
    talk: TALKS_BY_SLUG["vertical-text-web-javascript"],
    track: "D",
    day: "1",
    startTime: "10:10",
    endTime: "10:20",
  },
  
  // 10:20 - 10:30 Sessions
  {
    kind: "talk",
    talk: TALKS_BY_SLUG["whats-new-in-ecma-402"],
    track: "A",
    day: "1",
    startTime: "10:20",
    endTime: "10:30",
  },
  {
    kind: "talk",
    talk: TALKS_BY_SLUG["proposal-composites-object-comparison"],
    track: "B",
    day: "1",
    startTime: "10:20",
    endTime: "10:30",
  },
  {
    kind: "talk",
    talk: TALKS_BY_SLUG["understanding-atomics-api"],
    track: "C",
    day: "1",
    startTime: "10:20",
    endTime: "10:30",
  },
  {
    kind: "talk",
    talk: TALKS_BY_SLUG["beyond-console-log"],
    track: "D",
    day: "1",
    startTime: "10:20",
    endTime: "10:30",
  },
  
  // 10:30 - 10:40 休憩
  {
    kind: "break",
    track: "all",
    day: "1",
    startTime: "10:30",
    endTime: "10:40",
  },
  
  // 10:40 - 10:50 Sessions
  {
    kind: "talk",
    talk: TALKS_BY_SLUG["in-doubt-what-to-pick-choose-qwik"],
    track: "A",
    day: "1",
    startTime: "10:40",
    endTime: "10:50",
  },
  {
    kind: "talk",
    talk: TALKS_BY_SLUG["javascript-pattern-matching"],
    track: "B",
    day: "1",
    startTime: "10:40",
    endTime: "10:50",
  },
  {
    kind: "talk",
    talk: TALKS_BY_SLUG["modern-js-framework-build-process"],
    track: "C",
    day: "1",
    startTime: "10:40",
    endTime: "10:50",
  },
  {
    kind: "talk",
    talk: TALKS_BY_SLUG["sustainable-oss-policy"],
    track: "D",
    day: "1",
    startTime: "10:40",
    endTime: "10:50",
  },
  
  // 10:50 - 11:00 Sessions
  {
    kind: "talk",
    talk: TALKS_BY_SLUG["talks-arent-most-important"],
    track: "A",
    day: "1",
    startTime: "10:50",
    endTime: "11:00",
  },
  {
    kind: "talk",
    talk: TALKS_BY_SLUG["javascript-typespec-safety-karuta"],
    track: "B",
    day: "1",
    startTime: "10:50",
    endTime: "11:00",
  },
  {
    kind: "talk",
    talk: TALKS_BY_SLUG["error-prototype-stack"],
    track: "C",
    day: "1",
    startTime: "10:50",
    endTime: "11:00",
  },
  {
    kind: "talk",
    talk: TALKS_BY_SLUG["mcp-ui-intent-driven-frontend"],
    track: "D",
    day: "1",
    startTime: "10:50",
    endTime: "11:00",
  },
  
  // 11:00 - 11:10 休憩
  {
    kind: "break",
    track: "all",
    day: "1",
    startTime: "11:00",
    endTime: "11:10",
  },
  
  // 11:10 - 11:40 Sessions (30 minutes)
  {
    kind: "talk",
    talk: TALKS_BY_SLUG["andromeda-future-of-typescript"],
    track: "A",
    day: "1",
    startTime: "11:10",
    endTime: "11:40",
  },
  {
    kind: "talk",
    talk: TALKS_BY_SLUG["nextjs-over-nextjs"],
    track: "B",
    day: "1",
    startTime: "11:10",
    endTime: "11:40",
  },
  {
    kind: "talk",
    talk: TALKS_BY_SLUG["cross-platform-tv-development"],
    track: "C",
    day: "1",
    startTime: "11:10",
    endTime: "11:40",
  },
  {
    kind: "talk",
    talk: TALKS_BY_SLUG["denkiyagi-sponsor-session"],
    track: "D",
    day: "1",
    startTime: "11:10",
    endTime: "11:40",
  },
  
  // 11:40 - 12:10 Sessions (30 minutes)
  {
    kind: "talk",
    talk: TALKS_BY_SLUG["evolving-nodejs-module-loader"],
    track: "A",
    day: "1",
    startTime: "11:40",
    endTime: "12:10",
  },
  {
    kind: "talk",
    talk: TALKS_BY_SLUG["ast-reporter-test-catalog"],
    track: "B",
    day: "1",
    startTime: "11:40",
    endTime: "12:10",
  },
  {
    kind: "talk",
    talk: TALKS_BY_SLUG["great-migration-webassembly"],
    track: "C",
    day: "1",
    startTime: "11:40",
    endTime: "12:10",
  },
  {
    kind: "talk",
    talk: TALKS_BY_SLUG["layerx-sponsor-session"],
    track: "D",
    day: "1",
    startTime: "11:40",
    endTime: "12:10",
  },
  
  // 12:10 - 13:10 昼休憩
  {
    kind: "break",
    track: "all",
    day: "1",
    startTime: "12:10",
    endTime: "13:10",
  },
  
  // 13:10 - 13:40 Sessions (30 minutes)
  {
    kind: "talk",
    talk: TALKS_BY_SLUG["handling-time-in-javascript-with-temporal"],
    track: "A",
    day: "1",
    startTime: "13:10",
    endTime: "13:40",
  },
  {
    kind: "talk",
    talk: TALKS_BY_SLUG["evolution-nodejs-inspector"],
    track: "B",
    day: "1",
    startTime: "13:10",
    endTime: "13:40",
  },
  {
    kind: "talk",
    talk: TALKS_BY_SLUG["running-typescript-natively-nodejs"],
    track: "C",
    day: "1",
    startTime: "13:10",
    endTime: "13:40",
  },
  {
    kind: "talk",
    talk: TALKS_BY_SLUG["miidas-sponsor-session"],
    track: "D",
    day: "1",
    startTime: "13:10",
    endTime: "13:40",
  },
  
  // 13:40 - 14:10 Sessions (30 minutes)
  {
    kind: "talk",
    talk: TALKS_BY_SLUG["state-of-the-web"],
    track: "A",
    day: "1",
    startTime: "13:40",
    endTime: "14:10",
  },
  {
    kind: "talk",
    talk: TALKS_BY_SLUG["ai-browser-builtin-apis"],
    track: "B",
    day: "1",
    startTime: "13:40",
    endTime: "14:10",
  },
  {
    kind: "talk",
    talk: TALKS_BY_SLUG["wintertc-server-side-standards"],
    track: "C",
    day: "1",
    startTime: "13:40",
    endTime: "14:10",
  },
  {
    kind: "talk",
    talk: TALKS_BY_SLUG["line-yahoo-sponsor-session"],
    track: "D",
    day: "1",
    startTime: "13:40",
    endTime: "14:10",
  },
  
  // 14:10 - 14:20 休憩
  {
    kind: "break",
    track: "all",
    day: "1",
    startTime: "14:10",
    endTime: "14:20",
  },
  
  // 14:20 - 14:50 Sessions (30 minutes)
  {
    kind: "talk",
    talk: TALKS_BY_SLUG["music-visualization-javascript"],
    track: "A",
    day: "1",
    startTime: "14:20",
    endTime: "14:50",
  },
  {
    kind: "talk",
    talk: TALKS_BY_SLUG["javascript-parser-using-support"],
    track: "B",
    day: "1",
    startTime: "14:20",
    endTime: "14:50",
  },
  {
    kind: "talk",
    talk: TALKS_BY_SLUG["state-of-deno"],
    track: "C",
    day: "1",
    startTime: "14:20",
    endTime: "14:50",
  },
  {
    kind: "talk",
    talk: TALKS_BY_SLUG["reiwa-travel-sponsor-session"],
    track: "D",
    day: "1",
    startTime: "14:20",
    endTime: "14:50",
  },
  
  // 14:50 - 15:20 Sessions (30 minutes)
  {
    kind: "talk",
    talk: TALKS_BY_SLUG["bun-video-talk"],
    track: "A",
    day: "1",
    startTime: "14:50",
    endTime: "15:20",
  },
  {
    kind: "talk",
    talk: TALKS_BY_SLUG["async-await-stack-trace"],
    track: "B",
    day: "1",
    startTime: "14:50",
    endTime: "15:20",
  },
  {
    kind: "talk",
    talk: TALKS_BY_SLUG["profiling-typescript-at-scale"],
    track: "C",
    day: "1",
    startTime: "14:50",
    endTime: "15:20",
  },
  {
    kind: "talk",
    talk: TALKS_BY_SLUG["kakehashi-sponsor-session"],
    track: "D",
    day: "1",
    startTime: "14:50",
    endTime: "15:20",
  },
  
  // 15:20 - 15:30 休憩
  {
    kind: "break",
    track: "all",
    day: "1",
    startTime: "15:20",
    endTime: "15:30",
  },
  
  // 15:30 - 16:00 Sessions (30 minutes)
  {
    kind: "talk",
    talk: TALKS_BY_SLUG["v8-from-script-to-call-rcx"],
    track: "A",
    day: "1",
    startTime: "15:30",
    endTime: "16:00",
  },
  {
    kind: "talk",
    talk: TALKS_BY_SLUG["javascript-prototype-override"],
    track: "B",
    day: "1",
    startTime: "15:30",
    endTime: "16:00",
  },
  {
    kind: "talk",
    talk: TALKS_BY_SLUG["tver-sponsor-session"],
    track: "C",
    day: "1",
    startTime: "15:30",
    endTime: "16:00",
  },
  {
    kind: "talk",
    talk: TALKS_BY_SLUG["cybozu-sponsor-session"],
    track: "D",
    day: "1",
    startTime: "15:30",
    endTime: "16:00",
  },
  
  // 16:00 - 16:30 Sessions (30 minutes)
  {
    kind: "talk",
    talk: TALKS_BY_SLUG["technical-discussion-tc39"],
    track: "A",
    day: "1",
    startTime: "16:00",
    endTime: "16:30",
  },
  {
    kind: "talk",
    talk: TALKS_BY_SLUG["module-harmony"],
    track: "B",
    day: "1",
    startTime: "16:00",
    endTime: "16:30",
  },
  {
    kind: "talk",
    talk: TALKS_BY_SLUG["cloudinary-sponsor-session"],
    track: "C",
    day: "1",
    startTime: "16:00",
    endTime: "16:30",
  },
  {
    kind: "talk",
    talk: TALKS_BY_SLUG["dwango-sponsor-session"],
    track: "D",
    day: "1",
    startTime: "16:00",
    endTime: "16:30",
  },
  
  // 16:30 - 17:00 Buffer (sessions if discussion extends)
  {
    kind: "closed",
    track: "A",
    day: "1",
    startTime: "16:30",
    endTime: "17:00",
  },
  {
    kind: "talk",
    talk: TALKS_BY_SLUG["i-cant-believe-its-not-javascript"],
    track: "B",
    day: "1",
    startTime: "16:30",
    endTime: "17:00",
  },
  {
    kind: "talk",
    talk: TALKS_BY_SLUG["money-forward-sponsor-session"],
    track: "C",
    day: "1",
    startTime: "16:30",
    endTime: "17:00",
  },
  {
    kind: "talk",
    talk: TALKS_BY_SLUG["findy-sponsor-session"],
    track: "D",
    day: "1",
    startTime: "16:30",
    endTime: "17:00",
  },
  
  // 17:00 - 17:10 空き時間
  {
    kind: "break",
    track: "all",
    day: "1",
    startTime: "17:00",
    endTime: "17:10",
  },
  
  // 17:10 - 18:10 Sponsor LT x 12
  {
    kind: "talk",
    talk: TALKS_BY_SLUG["sponsor-lt-session"],
    track: "A",
    day: "1",
    startTime: "17:10",
    endTime: "18:10",
  },
  {
    kind: "closed",
    track: "B",
    day: "1",
    startTime: "17:10",
    endTime: "18:10",
  },
  {
    kind: "closed",
    track: "C",
    day: "1",
    startTime: "17:10",
    endTime: "18:10",
  },
  {
    kind: "closed",
    track: "D",
    day: "1",
    startTime: "17:10",
    endTime: "18:10",
  },
  
  // 18:10 - 18:20 休憩
  {
    kind: "break",
    track: "all",
    day: "1",
    startTime: "18:10",
    endTime: "18:20",
  },
  
  // 18:20 - 18:50 TBD by Jxck
  {
    kind: "talk",
    talk: TALKS_BY_SLUG["tbd-by-jxck"],
    track: "A",
    day: "1",
    startTime: "18:20",
    endTime: "18:50",
  },
  {
    kind: "closed",
    track: "B",
    day: "1",
    startTime: "18:20",
    endTime: "18:50",
  },
  {
    kind: "closed",
    track: "C",
    day: "1",
    startTime: "18:20",
    endTime: "18:50",
  },
  {
    kind: "closed",
    track: "D",
    day: "1",
    startTime: "18:20",
    endTime: "18:50",
  },
  
  // 18:50 - 19:00 クロージング/懇親会説明
  {
    kind: "closing",
    track: "all",
    day: "1",
    startTime: "18:50",
    endTime: "19:00",
  },
  
  // 19:00 - 21:00 懇親会
  {
    kind: "networking",
    track: "all",
    day: "1",
    startTime: "19:00",
    endTime: "21:00",
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
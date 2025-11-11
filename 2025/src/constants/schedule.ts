import { timeToMinutes } from "@/lib/timeToMinutes";
import { Talk, TALKS_BY_SLUG } from "./talks";

type Day = "1";
export type Track = "A" | "B" | "C" | "D" | "all";

export const TRACKS = ["A", "B", "C", "D"] satisfies Track[];

export type SessionKind =
  | "reception"
  | "opening"
  | "talk"
  | "streaming"
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
    track: "all",
    day: "1",
    startTime: "10:00",
    endTime: "10:10",
  },

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

  {
    kind: "talk",
    talk: TALKS_BY_SLUG["in-doubt-what-to-pick-choose-qwik"],
    track: "A",
    day: "1",
    startTime: "10:30",
    endTime: "10:40",
  },
  {
    kind: "talk",
    talk: TALKS_BY_SLUG["javascript-pattern-matching"],
    track: "B",
    day: "1",
    startTime: "10:30",
    endTime: "10:40",
  },
  {
    kind: "talk",
    talk: TALKS_BY_SLUG["modern-js-framework-build-process"],
    track: "C",
    day: "1",
    startTime: "10:30",
    endTime: "10:40",
  },
  {
    kind: "talk",
    talk: TALKS_BY_SLUG["sustainable-oss-policy"],
    track: "D",
    day: "1",
    startTime: "10:30",
    endTime: "10:40",
  },

  {
    kind: "talk",
    talk: TALKS_BY_SLUG["talks-arent-most-important"],
    track: "A",
    day: "1",
    startTime: "10:40",
    endTime: "10:50",
  },
  {
    kind: "talk",
    talk: TALKS_BY_SLUG["javascript-typespec-safety-karuta"],
    track: "B",
    day: "1",
    startTime: "10:40",
    endTime: "10:50",
  },
  {
    kind: "talk",
    talk: TALKS_BY_SLUG["error-prototype-stack"],
    track: "C",
    day: "1",
    startTime: "10:40",
    endTime: "10:50",
  },
  {
    kind: "talk",
    talk: TALKS_BY_SLUG["mcp-ui-intent-driven-frontend"],
    track: "D",
    day: "1",
    startTime: "10:40",
    endTime: "10:50",
  },

  {
    kind: "break",
    track: "all",
    day: "1",
    startTime: "10:50",
    endTime: "11:00",
  },

  {
    kind: "talk",
    talk: TALKS_BY_SLUG["tbd-by-allen"],
    track: "A",
    day: "1",
    startTime: "11:00",
    endTime: "12:00",
  },
  {
    kind: "streaming",
    talk: TALKS_BY_SLUG["tbd-by-allen"],
    track: "B",
    day: "1",
    startTime: "11:00",
    endTime: "12:00",
  },
  {
    kind: "streaming",
    talk: TALKS_BY_SLUG["tbd-by-allen"],
    track: "C",
    day: "1",
    startTime: "11:00",
    endTime: "12:00",
  },
  {
    kind: "streaming",
    talk: TALKS_BY_SLUG["tbd-by-allen"],
    track: "D",
    day: "1",
    startTime: "11:00",
    endTime: "12:00",
  },

  {
    kind: "break",
    track: "all",
    day: "1",
    startTime: "12:00",
    endTime: "13:00",
  },

  {
    kind: "talk",
    talk: TALKS_BY_SLUG["andromeda-future-of-typescript"],
    track: "A",
    day: "1",
    startTime: "13:00",
    endTime: "13:30",
  },
  {
    kind: "talk",
    talk: TALKS_BY_SLUG["nextjs-caching-re-architecture"],
    track: "B",
    day: "1",
    startTime: "13:00",
    endTime: "13:30",
  },
  {
    kind: "talk",
    talk: TALKS_BY_SLUG["cross-platform-tv-development"],
    track: "C",
    day: "1",
    startTime: "13:00",
    endTime: "13:30",
  },
  {
    kind: "talk",
    talk: TALKS_BY_SLUG["cloudinary-sponsor-session"],
    track: "D",
    day: "1",
    startTime: "13:00",
    endTime: "13:30",
  },

  {
    kind: "talk",
    talk: TALKS_BY_SLUG["evolving-nodejs-module-loader"],
    track: "A",
    day: "1",
    startTime: "13:30",
    endTime: "14:00",
  },
  {
    kind: "talk",
    talk: TALKS_BY_SLUG["async-await-stack-trace"],
    track: "B",
    day: "1",
    startTime: "13:30",
    endTime: "14:00",
  },
  {
    kind: "talk",
    talk: TALKS_BY_SLUG["great-migration-webassembly"],
    track: "C",
    day: "1",
    startTime: "13:30",
    endTime: "14:00",
  },
  {
    kind: "talk",
    talk: TALKS_BY_SLUG["layerx-sponsor-session"],
    track: "D",
    day: "1",
    startTime: "13:30",
    endTime: "14:00",
  },

  {
    kind: "break",
    track: "all",
    day: "1",
    startTime: "14:00",
    endTime: "14:10",
  },

  {
    kind: "talk",
    talk: TALKS_BY_SLUG["handling-time-in-javascript-with-temporal"],
    track: "A",
    day: "1",
    startTime: "14:10",
    endTime: "14:40",
  },
  {
    kind: "talk",
    talk: TALKS_BY_SLUG["evolution-nodejs-inspector"],
    track: "B",
    day: "1",
    startTime: "14:10",
    endTime: "14:40",
  },
  {
    kind: "talk",
    talk: TALKS_BY_SLUG["wintertc-server-side-standards"],
    track: "C",
    day: "1",
    startTime: "14:10",
    endTime: "14:40",
  },
  {
    kind: "talk",
    talk: TALKS_BY_SLUG["miidas-sponsor-session"],
    track: "D",
    day: "1",
    startTime: "14:10",
    endTime: "14:40",
  },

  {
    kind: "talk",
    talk: TALKS_BY_SLUG["state-of-the-web"],
    track: "A",
    day: "1",
    startTime: "14:40",
    endTime: "15:10",
  },
  {
    kind: "talk",
    talk: TALKS_BY_SLUG["ai-browser-builtin-apis"],
    track: "B",
    day: "1",
    startTime: "14:40",
    endTime: "15:10",
  },
  {
    kind: "talk",
    talk: TALKS_BY_SLUG["running-typescript-natively-nodejs"],
    track: "C",
    day: "1",
    startTime: "14:40",
    endTime: "15:10",
  },
  {
    kind: "talk",
    talk: TALKS_BY_SLUG["line-yahoo-sponsor-session"],
    track: "D",
    day: "1",
    startTime: "14:40",
    endTime: "15:10",
  },

  {
    kind: "break",
    track: "all",
    day: "1",
    startTime: "15:10",
    endTime: "15:20",
  },

  {
    kind: "talk",
    talk: TALKS_BY_SLUG["music-visualization-javascript"],
    track: "A",
    day: "1",
    startTime: "15:20",
    endTime: "15:50",
  },
  {
    kind: "talk",
    talk: TALKS_BY_SLUG["javascript-parser-using-support"],
    track: "B",
    day: "1",
    startTime: "15:20",
    endTime: "15:50",
  },
  {
    kind: "talk",
    talk: TALKS_BY_SLUG["state-of-deno"],
    track: "C",
    day: "1",
    startTime: "15:20",
    endTime: "15:50",
  },
  {
    kind: "talk",
    talk: TALKS_BY_SLUG["reiwa-travel-sponsor-session"],
    track: "D",
    day: "1",
    startTime: "15:20",
    endTime: "15:50",
  },

  {
    kind: "talk",
    talk: TALKS_BY_SLUG["bun-video-talk"],
    track: "A",
    day: "1",
    startTime: "15:50",
    endTime: "16:20",
  },
  {
    kind: "talk",
    talk: TALKS_BY_SLUG["module-harmony"],
    track: "B",
    day: "1",
    startTime: "15:50",
    endTime: "16:20",
  },
  {
    kind: "talk",
    talk: TALKS_BY_SLUG["profiling-typescript-at-scale"],
    track: "C",
    day: "1",
    startTime: "15:50",
    endTime: "16:20",
  },
  {
    kind: "talk",
    talk: TALKS_BY_SLUG["kakehashi-sponsor-session"],
    track: "D",
    day: "1",
    startTime: "15:50",
    endTime: "16:20",
  },

  {
    kind: "break",
    track: "all",
    day: "1",
    startTime: "16:20",
    endTime: "16:30",
  },

  {
    kind: "talk",
    talk: TALKS_BY_SLUG["v8-from-script-to-call-rcx"],
    track: "A",
    day: "1",
    startTime: "16:30",
    endTime: "17:00",
  },
  {
    kind: "talk",
    talk: TALKS_BY_SLUG["javascript-prototype-override"],
    track: "B",
    day: "1",
    startTime: "16:30",
    endTime: "17:00",
  },
  {
    kind: "talk",
    talk: TALKS_BY_SLUG["tver-sponsor-session"],
    track: "C",
    day: "1",
    startTime: "16:30",
    endTime: "17:00",
  },
  {
    kind: "talk",
    talk: TALKS_BY_SLUG["cybozu-sponsor-session"],
    track: "D",
    day: "1",
    startTime: "16:30",
    endTime: "17:00",
  },

  {
    kind: "talk",
    talk: TALKS_BY_SLUG["technical-discussion-tc39"],
    track: "A",
    day: "1",
    startTime: "17:00",
    endTime: "17:30",
  },
  {
    kind: "talk",
    talk: TALKS_BY_SLUG["i-cant-believe-its-not-javascript"],
    track: "B",
    day: "1",
    startTime: "17:00",
    endTime: "17:30",
  },
  {
    kind: "talk",
    talk: TALKS_BY_SLUG["denkiyagi-sponsor-session"],
    track: "C",
    day: "1",
    startTime: "17:00",
    endTime: "17:30",
  },
  {
    kind: "talk",
    talk: TALKS_BY_SLUG["dwango-sponsor-session"],
    track: "D",
    day: "1",
    startTime: "17:00",
    endTime: "17:30",
  },

  {
    kind: "closed",
    track: "A",
    day: "1",
    startTime: "17:30",
    endTime: "18:00",
  },
  {
    kind: "talk",
    talk: TALKS_BY_SLUG["ast-reporter-test-catalog"],
    track: "B",
    day: "1",
    startTime: "17:30",
    endTime: "18:00",
  },
  {
    kind: "talk",
    talk: TALKS_BY_SLUG["money-forward-sponsor-session"],
    track: "C",
    day: "1",
    startTime: "17:30",
    endTime: "18:00",
  },
  {
    kind: "talk",
    talk: TALKS_BY_SLUG["findy-sponsor-session"],
    track: "D",
    day: "1",
    startTime: "17:30",
    endTime: "18:00",
  },

  {
    kind: "break",
    track: "all",
    day: "1",
    startTime: "18:00",
    endTime: "18:10",
  },

  {
    kind: "talk",
    talk: TALKS_BY_SLUG["sponsor-lt-session"],
    track: "A",
    day: "1",
    startTime: "18:10",
    endTime: "19:10",
  },
  {
    kind: "closed",
    track: "B",
    day: "1",
    startTime: "18:10",
    endTime: "19:10",
  },
  {
    kind: "closed",
    track: "C",
    day: "1",
    startTime: "18:10",
    endTime: "19:10",
  },
  {
    kind: "closed",
    track: "D",
    day: "1",
    startTime: "18:10",
    endTime: "19:10",
  },

  {
    kind: "break",
    track: "all",
    day: "1",
    startTime: "19:10",
    endTime: "19:20",
  },

  {
    kind: "talk",
    talk: TALKS_BY_SLUG[
      "technical-welfare-and-new-capitalistic-web-development"
    ],
    track: "A",
    day: "1",
    startTime: "19:20",
    endTime: "20:00",
  },
  {
    kind: "streaming",
    talk: TALKS_BY_SLUG[
      "technical-welfare-and-new-capitalistic-web-development"
    ],
    track: "B",
    day: "1",
    startTime: "19:20",
    endTime: "20:00",
  },
  {
    kind: "streaming",
    talk: TALKS_BY_SLUG[
      "technical-welfare-and-new-capitalistic-web-development"
    ],
    track: "C",
    day: "1",
    startTime: "19:20",
    endTime: "20:00",
  },
  {
    kind: "streaming",
    talk: TALKS_BY_SLUG[
      "technical-welfare-and-new-capitalistic-web-development"
    ],
    track: "D",
    day: "1",
    startTime: "19:20",
    endTime: "20:00",
  },

  {
    kind: "closing",
    track: "all",
    day: "1",
    startTime: "20:00",
    endTime: "20:05",
  },

  {
    kind: "networking",
    track: "all",
    day: "1",
    startTime: "20:05",
    endTime: "22:00",
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

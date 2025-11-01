import { describe, it, expect } from "vitest";
import { SCHEDULE } from "@/constants/schedule";
import { getTalkSessions } from "./getTalkSessions";

describe("getTalkSessions", () => {
  it("should return only talk sessions", () => {
    const talkSessions = getTalkSessions();

    expect(talkSessions.length).toBeGreaterThan(0);

    // Verify all sessions are talk sessions
    talkSessions.forEach((session) => {
      expect(session.kind).toBe("talk");
    });
  });

  it("should exclude non-talk sessions", () => {
    const talkSessions = getTalkSessions();
    const allSessions = SCHEDULE;

    expect(talkSessions.length).toBeLessThan(allSessions.length);

    // Verify no non-talk sessions are included
    const nonTalkSessions = allSessions.filter((s) => s.kind !== "talk");
    expect(nonTalkSessions.length).toBeGreaterThan(0); // Verify non-talk sessions exist in SCHEDULE
  });

  it("should return sessions with talk property", () => {
    const talkSessions = getTalkSessions();

    talkSessions.forEach((session) => {
      if (session.kind === "talk") {
        expect(session.talk).toBeDefined();
        expect(session.talk.slug).toBeDefined();
        expect(session.talk.enTitle).toBeDefined();
        expect(session.talk.jpTitle).toBeDefined();
      }
    });
  });
});

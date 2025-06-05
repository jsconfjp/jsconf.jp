import { describe, it, expect } from "vitest";
import { getTalkSessions } from "./getTalkSessions";
import { SCHEDULE } from "@/constants/schedule";

describe("getTalkSessions", () => {
  it("should return only talk sessions", () => {
    const talkSessions = getTalkSessions();

    expect(talkSessions.length).toBeGreaterThan(0);

    // 全てがtalkセッションであることを確認
    talkSessions.forEach((session) => {
      expect(session.kind).toBe("talk");
    });
  });

  it("should exclude non-talk sessions", () => {
    const talkSessions = getTalkSessions();
    const allSessions = SCHEDULE;

    expect(talkSessions.length).toBeLessThan(allSessions.length);

    // 非talkセッションが含まれていないことを確認
    const nonTalkSessions = allSessions.filter((s) => s.kind !== "talk");
    expect(nonTalkSessions.length).toBeGreaterThan(0); // 非talkセッションが存在することを確認
  });

  it("should return sessions with talk property", () => {
    const talkSessions = getTalkSessions();

    talkSessions.forEach((session) => {
      if (session.kind === "talk") {
        expect(session.talk).toBeDefined();
        expect(session.talk.slug).toBeDefined();
        expect(session.talk.title).toBeDefined();
      }
    });
  });
});

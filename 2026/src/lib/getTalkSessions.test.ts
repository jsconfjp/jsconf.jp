import { describe, it, expect } from "vitest";
import { SCHEDULE, ScheduledSession } from "@/constants/schedule";
import { getTalkSessions } from "./getTalkSessions";

describe("getTalkSessions", () => {
  const mockSessions: ScheduledSession[] = [
    {
      kind: "talk",
      talk: {
        slug: "test-talk",
        title: "Test Talk",
        description: "",
        kind: "session",
        day: "1",
        language: "English",
        speakers: [],
      },
      track: "A",
      day: "1",
      startTime: "10:00",
      endTime: "10:30",
    },
    {
      kind: "break",
      track: "all",
      day: "1",
      startTime: "10:30",
      endTime: "10:40",
    },
  ];

  it("should return only talk sessions", () => {
    const talkSessions = getTalkSessions(mockSessions);

    expect(talkSessions.length).toBe(1);

    // Verify all sessions are talk sessions
    talkSessions.forEach((session) => {
      expect(session.kind).toBe("talk");
    });
  });

  it("should exclude non-talk sessions", () => {
    const talkSessions = getTalkSessions(mockSessions);

    expect(talkSessions.length).toBeLessThan(mockSessions.length);

    // Verify non-talk sessions exist in the input but are excluded
    const nonTalkSessions = mockSessions.filter((s) => s.kind !== "talk");
    expect(nonTalkSessions.length).toBeGreaterThan(0);
  });

  it("should return sessions with talk property", () => {
    const talkSessions = getTalkSessions(mockSessions);

    talkSessions.forEach((session) => {
      if (session.kind === "talk") {
        expect(session.talk).toBeDefined();
        expect(session.talk.slug).toBeDefined();
        expect(session.talk.title).toBeDefined();
      }
    });
  });

  it("should default to the SCHEDULE constant", () => {
    expect(getTalkSessions()).toEqual(
      SCHEDULE.filter((session) => session.kind === "talk"),
    );
  });
});

import { describe, it, expect } from "vitest";
import { ScheduledSession } from "@/constants/schedule";
import { findTalkSession } from "./findTalkSession";
import { getTalkSessions } from "./getTalkSessions";

describe("findTalkSession", () => {
  const mockSessions: ScheduledSession[] = [
    {
      kind: "talk",
      talk: {
        slug: "test-talk-1",
        title: "Test Talk 1",
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

  it("should find talk session by slug", () => {
    const session = findTalkSession("test-talk-1", mockSessions);

    expect(session).toBeDefined();
    expect(session.kind).toBe("talk");
    expect(session.talk.slug).toBe("test-talk-1");
  });

  it("should throw error for non-existent slug", () => {
    // Bypass type constraint for error case testing
    expect(() =>
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      findTalkSession("non-existent-slug" as any, mockSessions)
    ).toThrow("Talk session not found for slug: non-existent-slug");
  });

  it("should throw error for non-talk sessions", () => {
    // Bypass type constraint for error case testing
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    expect(() => findTalkSession("break" as any, mockSessions)).toThrow(
      "Talk session not found for slug: break"
    );
  });

  it("should work with default SCHEDULE when no sessions provided", () => {
    const talkSessions = getTalkSessions();
    const session = findTalkSession(talkSessions[0].talk.slug);
    expect(session).toBeDefined();
  });
});

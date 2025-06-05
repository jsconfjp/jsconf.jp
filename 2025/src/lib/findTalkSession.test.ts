import { describe, it, expect } from "vitest";
import { findTalkSession } from "./findTalkSession";
import { ScheduledSession } from "@/constants/schedule";

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
    expect(session?.kind).toBe("talk");
    if (session?.kind === "talk") {
      expect(session.talk.slug).toBe("test-talk-1");
    }
  });

  it("should throw error for non-existent slug", () => {
    expect(() => findTalkSession("non-existent-slug", mockSessions)).toThrow(
      "Talk session not found for slug: non-existent-slug"
    );
  });

  it("should throw error for non-talk sessions", () => {
    expect(() => findTalkSession("break", mockSessions)).toThrow(
      "Talk session not found for slug: break"
    );
  });

  it("should work with default SCHEDULE when no sessions provided", () => {
    const session = findTalkSession("sample-talk-1");
    expect(session).toBeDefined();
  });
});

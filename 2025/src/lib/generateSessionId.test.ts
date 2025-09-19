import { describe, it, expect } from "vitest";
import { ScheduledSession, SCHEDULE } from "@/constants/schedule";
import { Talk } from "@/constants/talks";
import { generateSessionId } from "./generateSessionId";

describe("generateSessionId", () => {
  it("should generate correct ID for track-specific session", () => {
    const mockTalk: Talk = {
      slug: "test-talk",
      title: "Test Talk",
      description: "Test description",
      kind: "session",
      day: "1",
      language: "English",
      speakers: [
        {
          type: "speaker",
          name: "Test Speaker",
          avatarUrl: "https://example.com/avatar.png",
          bio: "Test bio",
        },
      ],
    };

    const mockSession: ScheduledSession = {
      startTime: "10:00",
      endTime: "10:30",
      track: "A",
      day: "1",
      kind: "talk",
      talk: mockTalk,
    };

    const id = generateSessionId(mockSession);
    expect(id).toBe("session-A-600"); // 10:00 = 600 minutes
  });

  it("should generate correct ID for all-track session", () => {
    const mockSession: ScheduledSession = {
      startTime: "09:30",
      endTime: "10:00",
      track: "all",
      day: "1",
      kind: "opening",
    };

    const id = generateSessionId(mockSession);
    expect(id).toBe("session-opening-570"); // 09:30 = 570 minutes
  });

  it("should generate different IDs for different sessions", () => {
    const mockTalk1: Talk = {
      slug: "talk-1",
      title: "Talk 1",
      description: "Description 1",
      kind: "session",
      day: "1",
      language: "English",
      speakers: [],
    };

    const mockTalk2: Talk = {
      slug: "talk-2",
      title: "Talk 2",
      description: "Description 2",
      kind: "LT",
      day: "1",
      language: "Japanese",
      speakers: [],
    };

    const mockSessions: ScheduledSession[] = [
      {
        startTime: "10:00",
        endTime: "10:30",
        track: "A",
        day: "1",
        kind: "talk",
        talk: mockTalk1,
      },
      {
        startTime: "10:30",
        endTime: "11:00",
        track: "B",
        day: "1",
        kind: "talk",
        talk: mockTalk2,
      },
      {
        startTime: "11:00",
        endTime: "11:30",
        track: "all",
        day: "1",
        kind: "break",
      },
    ];

    const ids = mockSessions.map(generateSessionId);
    const uniqueIds = new Set(ids);

    expect(uniqueIds.size).toBe(ids.length);
    expect(ids).toEqual([
      "session-A-600", // 10:00 = 600 minutes
      "session-B-630", // 10:30 = 630 minutes
      "session-break-660", // 11:00 = 660 minutes
    ]);
  });

  it("should generate unique IDs for all sessions in SCHEDULE", () => {
    // Generate IDs for all sessions in the actual schedule
    const allIds = SCHEDULE.map(generateSessionId);
    const uniqueIds = new Set(allIds);

    // Find and expose duplicates if they exist
    const duplicates = allIds.filter(
      (id, index) => allIds.indexOf(id) !== index,
    );
    expect(duplicates).toEqual([]);

    // This will show the exact count difference if uniqueness fails
    expect(uniqueIds.size).toBe(allIds.length);

    // Verify no empty/invalid IDs exist by filtering them out
    const validIds = allIds.filter(
      (id) => id && typeof id === "string" && id.length > 0,
    );
    expect(validIds).toHaveLength(allIds.length);
  });
});

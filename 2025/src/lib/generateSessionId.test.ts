import { describe, it, expect } from "vitest";
import { generateSessionId } from "./generateSessionId";
import { SCHEDULE } from "@/constants/schedule";

describe("generateSessionId", () => {
  it("should generate correct ID for track-specific session", () => {
    const session = SCHEDULE.find(
      (s) => s.track !== "all" && s.kind === "talk"
    );
    if (session) {
      const id = generateSessionId(session);
      expect(id).toMatch(/^session-[A-D]-\d+$/);
    }
  });

  it("should generate correct ID for all-track session", () => {
    const session = SCHEDULE.find((s) => s.track === "all");
    if (session) {
      const id = generateSessionId(session);
      expect(id).toMatch(/^session-\w+-\d+$/);
      expect(id).toContain("session-");
    }
  });

  it("should generate different IDs for different sessions", () => {
    const sessions = SCHEDULE.slice(0, 3);
    const ids = sessions.map(generateSessionId);

    // 重複がないことを確認
    const uniqueIds = new Set(ids);
    expect(uniqueIds.size).toBe(ids.length);
  });
});

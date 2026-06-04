import { describe, it, expect } from "vitest";
import { SCHEDULE, ScheduledSession } from "@/constants/schedule";
import {
  generateTimeSlots,
  TIME_SLOT_INTERVAL_MINUTES,
} from "./generateTimeSlots";

describe("generateTimeSlots", () => {
  const mockSessions: ScheduledSession[] = [
    {
      kind: "opening",
      track: "all",
      day: "1",
      startTime: "10:00",
      endTime: "10:10",
    },
    {
      kind: "break",
      track: "all",
      day: "1",
      startTime: "12:00",
      endTime: "13:00",
    },
  ];

  it("should generate time slots in configured intervals", () => {
    const slots = generateTimeSlots(mockSessions);

    // Verify slot count (from start to end time in configured intervals)
    expect(slots.length).toBeGreaterThan(0);

    // Check intervals match the configured interval
    for (let i = 1; i < slots.length; i++) {
      expect(slots[i] - slots[i - 1]).toBe(TIME_SLOT_INTERVAL_MINUTES);
    }
  });

  it("should throw error for empty sessions array", () => {
    expect(() => generateTimeSlots([])).toThrow(
      "Sessions array cannot be empty for time slot generation",
    );
  });

  it("should use the default SCHEDULE when no argument is provided", () => {
    if (SCHEDULE.length > 0) {
      expect(generateTimeSlots().length).toBeGreaterThan(0);
    } else {
      // スケジュール未確定（SCHEDULE が空）の間は default 引数でも throw する
      expect(() => generateTimeSlots()).toThrow(
        "Sessions array cannot be empty for time slot generation",
      );
    }
  });

  it("should throw error for invalid time range", () => {
    // Test with start and end times set to same value (start >= end)
    const invalidSessions: ScheduledSession[] = [
      {
        kind: "break",
        track: "all",
        day: "1",
        startTime: "11:40", // Same time
        endTime: "11:40", // Same time (start >= end)
      },
    ];

    expect(() => generateTimeSlots(invalidSessions)).toThrow(
      "Invalid time range: start time must be before end time",
    );
  });
});

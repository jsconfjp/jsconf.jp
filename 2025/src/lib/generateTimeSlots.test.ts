import { describe, it, expect } from "vitest";
import {
  generateTimeSlots,
  TIME_SLOT_INTERVAL_MINUTES,
} from "./generateTimeSlots";

describe("generateTimeSlots", () => {
  it("should generate time slots in configured intervals", () => {
    const slots = generateTimeSlots();

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

  it("should use default SCHEDULE when undefined sessions provided", () => {
    // Default parameter uses SCHEDULE when undefined is passed
    const slots = generateTimeSlots();
    expect(slots.length).toBeGreaterThan(0);
  });

  it("should throw error for invalid time range", () => {
    // Test with start and end times set to same value (start >= end)
    const invalidSessions = [
      {
        kind: "break" as const,
        track: "all" as const,
        day: "1" as const,
        startTime: "11:40", // Same time
        endTime: "11:40", // Same time (start >= end)
      },
    ];

    expect(() => generateTimeSlots(invalidSessions)).toThrow(
      "Invalid time range: start time must be before end time",
    );
  });
});

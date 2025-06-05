import { describe, it, expect } from "vitest";
import { timeToMinutes } from "./timeToMinutes";

describe("timeToMinutes", () => {
  it("should convert time string to minutes correctly", () => {
    expect(timeToMinutes("10:00")).toBe(600);
    expect(timeToMinutes("10:30")).toBe(630);
    expect(timeToMinutes("09:05")).toBe(545);
    expect(timeToMinutes("12:35")).toBe(755);
  });

  it("should handle edge cases", () => {
    expect(timeToMinutes("00:00")).toBe(0);
    expect(timeToMinutes("23:59")).toBe(1439);
  });

  it("should throw error for invalid formats", () => {
    expect(() => timeToMinutes("")).toThrow("Invalid time format:");
    expect(() => timeToMinutes("10")).toThrow("Expected HH:mm format");
    expect(() => timeToMinutes(":30")).toThrow(
      "Both hours and minutes must be provided"
    );
    expect(() => timeToMinutes("ab:cd")).toThrow(
      "Hours and minutes must be numbers"
    );
    expect(() => timeToMinutes("25:00")).toThrow("Hours must be 0-23");
    expect(() => timeToMinutes("10:60")).toThrow("minutes must be 0-59");
    expect(() => timeToMinutes("-1:30")).toThrow("Hours must be 0-23");
  });
});

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
    expect(() => timeToMinutes("")).toThrow("Invalid time format");
    expect(() => timeToMinutes("10")).toThrow("Invalid time format");
    expect(() => timeToMinutes(":30")).toThrow("Invalid time format");
    expect(() => timeToMinutes("ab:cd")).toThrow("Invalid time format");
  });
});

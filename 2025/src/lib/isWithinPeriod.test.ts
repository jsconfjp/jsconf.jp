import { describe, it, expect } from "vitest";
import { isWithinPeriod } from "./isWithinPeriod";

describe("isWithinPeriod", () => {
  it("should return true when current date is within period", () => {
    const current = new Date("2025-07-15T12:00:00+09:00");
    const from = new Date("2025-06-01T00:00:00+09:00");
    const until = new Date("2025-08-31T00:00:00+09:00");

    expect(isWithinPeriod(current, from, until)).toBe(true);
  });

  it("should return false when current date is before period", () => {
    const current = new Date("2025-05-15T12:00:00+09:00");
    const from = new Date("2025-06-01T00:00:00+09:00");
    const until = new Date("2025-08-31T00:00:00+09:00");

    expect(isWithinPeriod(current, from, until)).toBe(false);
  });

  it("should return false when current date is after period", () => {
    const current = new Date("2025-09-15T12:00:00+09:00");
    const from = new Date("2025-06-01T00:00:00+09:00");
    const until = new Date("2025-08-31T00:00:00+09:00");

    expect(isWithinPeriod(current, from, until)).toBe(false);
  });

  it("should work without until date", () => {
    const current = new Date("2025-07-15T12:00:00+09:00");
    const from = new Date("2025-06-01T00:00:00+09:00");

    expect(isWithinPeriod(current, from)).toBe(true);
  });

  it("should return false when current date is before start without until", () => {
    const current = new Date("2025-05-15T12:00:00+09:00");
    const from = new Date("2025-06-01T00:00:00+09:00");

    expect(isWithinPeriod(current, from)).toBe(false);
  });

  it("should throw error for invalid current date", () => {
    const from = new Date("2025-06-01T00:00:00+09:00");

    expect(() => isWithinPeriod(new Date("invalid"), from)).toThrow(
      "Invalid current date provided"
    );
  });

  it("should throw error for invalid from date", () => {
    const current = new Date("2025-07-15T12:00:00+09:00");

    expect(() => isWithinPeriod(current, new Date("invalid"))).toThrow(
      "Invalid from date provided"
    );
  });

  it("should throw error for invalid until date", () => {
    const current = new Date("2025-07-15T12:00:00+09:00");
    const from = new Date("2025-06-01T00:00:00+09:00");

    expect(() => isWithinPeriod(current, from, new Date("invalid"))).toThrow(
      "Invalid until date provided"
    );
  });

  it("should throw error when from date is after until date", () => {
    const current = new Date("2025-07-15T12:00:00+09:00");
    const from = new Date("2025-08-01T00:00:00+09:00");
    const until = new Date("2025-06-01T00:00:00+09:00");

    expect(() => isWithinPeriod(current, from, until)).toThrow(
      "From date must be before until date"
    );
  });
});

import { describe, it, expect } from "vitest";
import { Temporal } from "temporal-polyfill";
import { TICKET_OPEN, getRemaining } from "./ticketCountdown";

const at = (iso: string) => Temporal.ZonedDateTime.from(`${iso}[Asia/Tokyo]`);

describe("getRemaining", () => {
  it("opens at 2026-10-01 00:00 JST", () => {
    const target = Temporal.ZonedDateTime.from(TICKET_OPEN);
    expect(target.toString()).toBe("2026-10-01T00:00:00+09:00[Asia/Tokyo]");
  });

  it("counts down days, hours, minutes and seconds", () => {
    expect(getRemaining(Temporal, at("2026-09-28T10:30:15"))).toEqual({
      days: 2,
      hours: 13,
      minutes: 29,
      seconds: 45,
    });
  });

  it("handles other time zones", () => {
    const utc = Temporal.ZonedDateTime.from("2026-09-30T15:00:00[UTC]"); // = 2026-10-01 00:00 JST
    expect(getRemaining(Temporal, utc)).toBeNull();
    expect(getRemaining(Temporal, utc.subtract({ seconds: 1 }))).toEqual({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 1,
    });
  });

  it("returns null once tickets are open", () => {
    expect(getRemaining(Temporal, at("2026-10-01T00:00:00"))).toBeNull();
    expect(getRemaining(Temporal, at("2026-11-22T10:00:00"))).toBeNull();
  });
});

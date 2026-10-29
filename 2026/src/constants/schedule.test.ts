import { describe, expect, it } from "vitest";
import { SCHEDULE } from "./schedule";
import { TALKS } from "./talks";

describe("SCHEDULE", () => {
  it("schedules every talk exactly once", () => {
    const slugs = SCHEDULE.filter((session) => session.kind === "talk").map((session) => session.talk.slug);
    expect(slugs.toSorted()).toEqual(TALKS.map((talk) => talk.slug).toSorted());
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("has no overlapping sessions on the same track", () => {
    for (const [index, session] of SCHEDULE.entries()) {
      for (const other of SCHEDULE.slice(index + 1)) {
        if (session.day !== other.day) continue;
        if (session.track !== other.track && session.track !== "all" && other.track !== "all") continue;
        expect(
          session.endTime <= other.startTime || other.endTime <= session.startTime,
          `${session.track} ${session.startTime} overlaps ${other.track} ${other.startTime}`,
        ).toBe(true);
      }
    }
  });

  it.each([
    ["ypresto", "C", "13:00", "13:30"],
    ["neciu-dan", "A", "17:00", "17:30"],
    ["html-in-canvas-api", "A", "13:00", "13:30"],
  ])("places %s in its notified slot", (slug, track, startTime, endTime) => {
    expect(SCHEDULE.find((session) => session.kind === "talk" && session.talk.slug === slug)).toMatchObject({
      track,
      startTime,
      endTime,
    });
  });

  it("moves only the TBA slot and preserves the room closure", () => {
    expect(SCHEDULE.filter((session) => session.kind === "tba")).toEqual([
      { kind: "tba", track: "C", day: "1", startTime: "14:40", endTime: "15:10", label: undefined },
    ]);
    expect(SCHEDULE.find((session) => session.kind === "closed")).toMatchObject({
      track: "A",
      startTime: "19:10",
      endTime: "19:40",
    });
  });
});

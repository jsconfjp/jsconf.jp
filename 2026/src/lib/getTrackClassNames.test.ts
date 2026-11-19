import { describe, expect, it } from "vitest";
import { getTrackClassNames } from "./getTrackClassNames";

describe("getTrackClassNames", () => {
  it("returns correct classes for track A", () => {
    expect(getTrackClassNames("A")).toBe("bg-track-a text-track-a-surface");
  });

  it("returns correct classes for track B", () => {
    expect(getTrackClassNames("B")).toBe("bg-track-b text-track-b-surface");
  });

  it("returns correct classes for track C", () => {
    expect(getTrackClassNames("C")).toBe("bg-track-c text-track-c-surface");
  });

  it("returns correct classes for track D", () => {
    expect(getTrackClassNames("D")).toBe("bg-track-d text-track-d-surface");
  });

  it("returns default classes for track all", () => {
    expect(getTrackClassNames("all")).toBe("bg-secondary text-white");
  });

  it("returns default classes for unknown track values", () => {
    // TypeScript prevents this at compile time, but testing runtime behavior
    // @ts-expect-error Testing invalid input
    expect(getTrackClassNames("unknown")).toBe("bg-secondary text-white");
  });
});

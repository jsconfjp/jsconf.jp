import { describe, it, expect } from "vitest";
import { PINNED_SPECIAL_SPEAKER_NAMES, RANDOM_SPECIAL_SPEAKER_COUNT } from "@/constants/specialSpeakers";
import { getSpecialSpeakers } from "./getSpecialSpeakers";

describe("getSpecialSpeakers", () => {
  const { pinned, pool } = getSpecialSpeakers();

  it("resolves every pinned name to an existing speaker, in order", () => {
    expect(pinned.map((card) => card.name)).toEqual([...PINNED_SPECIAL_SPEAKER_NAMES]);
  });

  it("builds a pool of unique non-pinned speakers large enough for the random slots", () => {
    const names = pool.map((card) => card.name);
    expect(new Set(names).size).toBe(names.length);
    expect(names).not.toContain(PINNED_SPECIAL_SPEAKER_NAMES[0]);
    expect(pool.length).toBeGreaterThanOrEqual(RANDOM_SPECIAL_SPEAKER_COUNT);
  });

  it("excludes sponsors from the pool", () => {
    expect(pool.every((card) => !card.kind.startsWith("sponsor"))).toBe(true);
  });

  it("skips pinned names that do not match any speaker", () => {
    expect(getSpecialSpeakers(undefined, ["Nobody"]).pinned).toEqual([]);
  });
});

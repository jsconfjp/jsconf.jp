import { describe, it, expect } from "vitest";
import { SPECIAL_SPEAKER_NAMES } from "@/constants/specialSpeakers";
import { getSpecialSpeakers } from "./getSpecialSpeakers";

describe("getSpecialSpeakers", () => {
  it("resolves every configured name to an existing speaker, in order", () => {
    const speakers = getSpecialSpeakers();
    expect(speakers.map(({ speaker }) => speaker.name)).toEqual([...SPECIAL_SPEAKER_NAMES]);
  });

  it("skips names that do not match any speaker", () => {
    expect(getSpecialSpeakers(["Nobody"])).toEqual([]);
  });
});

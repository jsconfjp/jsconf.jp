import { describe, it, expect } from "vitest";
import { flattenSpeakers } from "./flattenSpeakers";
import { TALKS } from "@/constants/talks";

describe("flattenSpeakers", () => {
  it("should flatten all speakers from all talks", () => {
    const flattened = flattenSpeakers();

    expect(flattened.length).toBeGreaterThan(0);
    // Verify each element has talk and speaker properties
    flattened.forEach((item) => {
      expect(item.talk).toBeDefined();
      expect(item.speaker).toBeDefined();
      expect(item.talk.slug).toBeDefined();
      expect(item.speaker.name).toBeDefined();
    });
  });

  it("should include speakers from multiple talks", () => {
    const flattened = flattenSpeakers();

    // Verify speakers from multiple talks are included
    const uniqueTalkSlugs = new Set(flattened.map((item) => item.talk.slug));
    expect(uniqueTalkSlugs.size).toBeGreaterThan(1);
  });

  it("should create multiple entries for talks with multiple speakers", () => {
    const flattened = flattenSpeakers();

    // sample-talk-1 has multiple speakers, so there should be multiple entries
    const sampleTalk1Entries = flattened.filter(
      (item) => item.talk.slug === "sample-talk-1"
    );
    expect(sampleTalk1Entries.length).toBeGreaterThan(1);
  });

  it("should maintain correct relationship between talks and speakers", () => {
    const flattened = flattenSpeakers();

    // Verify correct relationships are maintained compared to original TALKS data
    flattened.forEach((item) => {
      const originalTalk = TALKS.find((talk) => talk.slug === item.talk.slug);
      expect(originalTalk).toBeDefined();
      if (originalTalk) {
        expect(originalTalk.speakers).toContain(item.speaker);
      }
    });
  });

  it("should work with custom talks array", () => {
    const customTalks = TALKS.slice(0, 2); // First 2 talks only
    const flattened = flattenSpeakers(customTalks);

    const uniqueTalkSlugs = new Set(flattened.map((item) => item.talk.slug));
    expect(uniqueTalkSlugs.size).toBeLessThanOrEqual(2);

    // Should only include speakers from the first 2 talks
    flattened.forEach((item) => {
      expect(customTalks.some((talk) => talk.slug === item.talk.slug)).toBe(
        true
      );
    });
  });
});

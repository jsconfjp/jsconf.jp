import { describe, it, expect } from "vitest";
import { SPONSORS } from "./sponsors";
import { TALKS } from "./talks";

const SPONSOR_KINDS = ["sponsor session", "sponsor LT"];

describe("TALKS", () => {
  it("has unique slugs", () => {
    const slugs = TALKS.map((talk) => talk.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("links every sponsor session/LT to exactly one registered sponsor", () => {
    const sponsorTalks = TALKS.filter((talk) =>
      SPONSOR_KINDS.includes(talk.kind),
    );
    expect(sponsorTalks.length).toBeGreaterThan(0);

    for (const talk of sponsorTalks) {
      expect(talk.speakers, talk.slug).toHaveLength(1);
      const [speaker] = talk.speakers;
      expect(speaker?.type, talk.slug).toBe("sponsor");
      expect(SPONSORS, talk.slug).toContain(speaker);
    }
  });

  it("does not attach sponsors to non-sponsor talks", () => {
    const talks = TALKS.filter((talk) => !SPONSOR_KINDS.includes(talk.kind));
    for (const talk of talks) {
      for (const speaker of talk.speakers) {
        expect(speaker.type, talk.slug).toBe("speaker");
      }
    }
  });
});

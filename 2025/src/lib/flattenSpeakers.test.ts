import { describe, it, expect } from "vitest";
import { TALKS, Talk } from "@/constants/talks";
import { flattenSpeakers } from "./flattenSpeakers";

describe("flattenSpeakers", () => {
  const mockTalks: Talk[] = [
    {
      slug: "talk-1",
      title: "Talk 1",
      description: "Description 1",
      kind: "session",
      day: "1",
      language: "English",
      speakers: [
        { type: "speaker", name: "Speaker A", avatarUrl: "", bio: "" },
        { type: "speaker", name: "Speaker B", avatarUrl: "", bio: "" },
      ],
    },
    {
      slug: "talk-2",
      title: "Talk 2",
      description: "Description 2",
      kind: "sponsor session",
      day: "1",
      language: "English",
      speakers: [
        {
          type: "sponsor",
          name: "Sponsor Company",
          url: "https://sponsor.com",
          prText: "PR text",
          logoUrl: "",
          plan: "sponsor",
        },
      ],
    },
  ];

  it("should flatten all speakers from all talks", () => {
    const flattened = flattenSpeakers(mockTalks);

    expect(flattened.length).toBe(3); // 2 speakers + 1 sponsor
    // Verify each element has talk and speaker properties
    flattened.forEach((item) => {
      expect(item.talk).toBeDefined();
      expect(item.speaker).toBeDefined();
      expect(item.talk.slug).toBeDefined();
      expect(item.speaker.name).toBeDefined();
      expect(["speaker", "sponsor"]).toContain(item.speaker.type);
    });
  });

  it("should include speakers from multiple talks", () => {
    const flattened = flattenSpeakers(mockTalks);

    // Verify speakers from multiple talks are included
    const uniqueTalkSlugs = new Set(flattened.map((item) => item.talk.slug));
    expect(uniqueTalkSlugs.size).toBe(2); // Exactly 2 talks
  });

  it("should return multiple entries for talks with multiple speakers", () => {
    const flattened = flattenSpeakers(mockTalks);

    // talk-1 has 2 speakers, so there should be 2 entries
    const talk1Entries = flattened.filter(
      (item) => item.talk.slug === "talk-1",
    );
    expect(talk1Entries.length).toBe(2);
  });

  it("should preserve correct relationship between talks and speakers", () => {
    const flattened = flattenSpeakers(mockTalks);

    // Verify correct relationships are maintained
    flattened.forEach((item) => {
      const originalTalk = mockTalks.find(
        (talk) => talk.slug === item.talk.slug,
      );
      expect(originalTalk).toBeDefined();
      if (originalTalk) {
        expect(originalTalk.speakers).toContain(item.speaker);
      }
    });
  });

  it("should handle both regular speakers and sponsor speakers", () => {
    const flattened = flattenSpeakers(mockTalks);

    const regularSpeakers = flattened.filter(
      (item) => item.speaker.type === "speaker",
    );
    const sponsorSpeakers = flattened.filter(
      (item) => item.speaker.type === "sponsor",
    );

    expect(regularSpeakers.length).toBe(2); // Speaker A and B
    expect(sponsorSpeakers.length).toBe(1); // Sponsor Company
    expect(flattened.length).toBe(3); // Total
  });

  it("should work with default TALKS when no parameter provided", () => {
    const flattened = flattenSpeakers();
    expect(flattened.length).toBeGreaterThan(0);

    // Should use default TALKS data
    flattened.forEach((item) => {
      expect(TALKS.some((talk) => talk.slug === item.talk.slug)).toBe(true);
    });
  });
});

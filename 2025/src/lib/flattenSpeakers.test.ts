import { describe, it, expect } from "vitest";
import { flattenSpeakers } from "./flattenSpeakers";
import { TALKS } from "@/constants/talks";

describe("flattenSpeakers", () => {
  it("should flatten speakers from all talks", () => {
    const flattened = flattenSpeakers();

    expect(flattened.length).toBeGreaterThan(0);

    // 各要素がtalkとspeakerを持つことを確認
    flattened.forEach((item) => {
      expect(item.talk).toBeDefined();
      expect(item.speaker).toBeDefined();
      expect(item.talk.slug).toBeDefined();
      expect(item.speaker.name).toBeDefined();
    });
  });

  it("should include speakers from multiple talks", () => {
    const flattened = flattenSpeakers();

    // 複数のトークのスピーカーが含まれていることを確認
    const uniqueTalkSlugs = new Set(flattened.map((item) => item.talk.slug));
    expect(uniqueTalkSlugs.size).toBeGreaterThan(1);
  });

  it("should handle talks with multiple speakers", () => {
    const flattened = flattenSpeakers();

    // sample-talk-1は複数のスピーカーを持つので、複数のエントリがあるはず
    const sampleTalk1Speakers = flattened.filter(
      (item) => item.talk.slug === "sample-talk-1"
    );
    expect(sampleTalk1Speakers.length).toBeGreaterThan(1);
  });

  it("should maintain correct talk-speaker relationship", () => {
    const flattened = flattenSpeakers();

    // 元のTALKSデータと比較して正しい関係性が保たれているか確認
    TALKS.forEach((talk) => {
      const flattenedForThisTalk = flattened.filter(
        (item) => item.talk.slug === talk.slug
      );
      expect(flattenedForThisTalk.length).toBe(talk.speakers.length);

      flattenedForThisTalk.forEach((item, index) => {
        expect(item.talk).toEqual(talk);
        expect(item.speaker).toEqual(talk.speakers[index]);
      });
    });
  });

  it("should include both regular speakers and sponsor speakers", () => {
    const flattened = flattenSpeakers();

    const regularSpeakers = flattened.filter(
      (item) => item.speaker.type === "speaker"
    );
    const sponsorSpeakers = flattened.filter(
      (item) => item.speaker.type === "sponsor"
    );

    expect(regularSpeakers.length).toBeGreaterThan(0);
    expect(sponsorSpeakers.length).toBeGreaterThan(0);
  });
});

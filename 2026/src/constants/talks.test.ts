import { describe, it, expect } from "vitest";
import { SPONSORS } from "./sponsors";
import speakerProfiles from "./speakerProfiles.json";
import { TALKS } from "./talks";
import sponsorTalkDetails from "./sponsorTalkDetails.json";
import talkSlides from "./talkSlides.json";

const SPONSOR_KINDS = ["sponsor session", "sponsor LT"];

describe("TALKS", () => {
  it("maps slides only to existing talk slugs", () => {
    const slugs = new Set(TALKS.map((talk) => talk.slug));
    expect(Object.keys(talkSlides).filter((slug) => !slugs.has(slug))).toEqual([]);
  });

  it("provides a title and an image for every slide", () => {
    const incomplete = Object.values(talkSlides)
      .flat()
      .filter((slide) => !slide.title.trim() || !/^(https:\/\/|\/2026\/)/.test(slide.image));
    expect(incomplete.map((slide) => slide.url)).toEqual([]);
  });

  it("provides English titles for Japanese-language talks", () => {
    const untranslated = TALKS.filter((talk) => talk.language === "Japanese" && !talk.titleEn);
    expect(untranslated.map((talk) => talk.slug)).toEqual([]);
  });

  it("provides Japanese titles for English-language talks", () => {
    const untranslated = TALKS.filter((talk) => talk.language === "English" && !talk.titleJa);
    expect(untranslated.map((talk) => talk.slug)).toEqual([]);
  });

  it("provides English descriptions for Japanese-language talks", () => {
    const untranslated = TALKS.filter(
      (talk) =>
        (talk.language === "Japanese" || talk.language === "Japanese and English") && !talk.descriptionEn?.trim(),
    );
    expect(untranslated.map((talk) => talk.slug)).toEqual([]);
  });

  it("provides a Japanese bio for every speaker", () => {
    const speakers = TALKS.flatMap((talk) => talk.speakers).filter((speaker) => speaker.type === "speaker");

    for (const speaker of speakers) {
      expect(speaker.bioJa.trim(), speaker.name).not.toBe("");
    }
  });

  it("provides an English bio for every Japanese bio", () => {
    const japaneseBio = /[\u3040-\u30ff\u3400-\u9fff]/;
    const untranslated = Object.entries(speakerProfiles).filter(
      ([, profile]) => japaneseBio.test(profile.bio) && (!("bioEn" in profile) || !profile.bioEn.trim()),
    );

    expect(untranslated.map(([name]) => name)).toEqual([]);
  });

  it("publishes every submitted sponsor talk in its existing slot", () => {
    for (const [slug, details] of Object.entries(sponsorTalkDetails)) {
      const talk = TALKS.find((talk) => talk.slug === slug);
      expect(talk, slug).toMatchObject(details);
      expect(SPONSOR_KINDS, slug).toContain(talk?.kind);
    }
    expect(TALKS.some((talk) => talk.slug === "mcd3-sponsor-session")).toBe(false);
  });

  it("has unique slugs", () => {
    const slugs = TALKS.map((talk) => talk.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("links every sponsor session/LT to exactly one registered sponsor", () => {
    const sponsorTalks = TALKS.filter((talk) => SPONSOR_KINDS.includes(talk.kind));
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

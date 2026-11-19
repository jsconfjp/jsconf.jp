import { describe, expect, it } from "vitest";
import { getTalkDescription } from "./getTalkDescription";

describe("getTalkDescription", () => {
  it("returns the locale-specific description when available", () => {
    const talk = { description: "日本語", descriptionEn: "English", descriptionJa: "日本語" };

    expect(getTalkDescription(talk, "en")).toBe("English");
    expect(getTalkDescription(talk, "ja")).toBe("日本語");
  });

  it("falls back to the base description when a locale-specific description is missing", () => {
    const talk = { description: "日本語" };

    expect(getTalkDescription(talk, "en")).toBe("日本語");
    expect(getTalkDescription(talk, "ja")).toBe("日本語");
  });
});

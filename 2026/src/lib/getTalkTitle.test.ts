import { describe, it, expect } from "vitest";
import { getTalkTitle } from "./getTalkTitle";

describe("getTalkTitle", () => {
  it("returns the Japanese title for ja when available", () => {
    expect(getTalkTitle({ title: "English", titleJa: "日本語" }, "ja")).toBe("日本語");
    expect(getTalkTitle({ title: "English", titleJa: "日本語" }, "en")).toBe("English");
  });

  it("returns the English title for en when available", () => {
    expect(getTalkTitle({ title: "日本語", titleEn: "English" }, "en")).toBe("English");
    expect(getTalkTitle({ title: "日本語", titleEn: "English" }, "ja")).toBe("日本語");
  });

  it("falls back to the base title when titleJa is missing", () => {
    expect(getTalkTitle({ title: "Only" }, "ja")).toBe("Only");
    expect(getTalkTitle({ title: "Only" }, "en")).toBe("Only");
  });

  it("falls back to the base title when titleEn is missing", () => {
    expect(getTalkTitle({ title: "Only" }, "en")).toBe("Only");
  });
});

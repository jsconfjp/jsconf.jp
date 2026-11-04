import { describe, it, expect } from "vitest";
import { getTalkTitle } from "./getTalkTitle";

describe("getTalkTitle", () => {
  it("returns the Japanese title for ja when available", () => {
    expect(getTalkTitle({ title: "English", titleJa: "日本語" }, "ja")).toBe("日本語");
    expect(getTalkTitle({ title: "English", titleJa: "日本語" }, "en")).toBe("English");
  });

  it("falls back to the base title when titleJa is missing", () => {
    expect(getTalkTitle({ title: "Only" }, "ja")).toBe("Only");
    expect(getTalkTitle({ title: "Only" }, "en")).toBe("Only");
  });
});

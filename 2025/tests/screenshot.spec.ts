import { join } from "node:path";
import { test } from "@playwright/test";
import { LOCALES } from "@/i18n/constants";
import nextConfig from "../next.config";

const DIR_SCREENSHOTS = join(__dirname, "..", "screenshots");
const prefix = nextConfig.basePath;

const pages = [
  { label: "Top", url: "/" },
  { label: "Sponsors", url: "/sponsors" },
  { label: "Venue", url: "/venue" },
  { label: "Schedule", url: "/schedule" },
  { label: "Speakers", url: "/speakers" },
  { label: "CoC", url: "/doc/code-of-conduct" },
].map((page) => ({
  ...page,
  slug: page.url.split("/").filter(Boolean).join("-"),
}));
const pageWithLocales = pages.flatMap((page) =>
  LOCALES.map((locale) => ({
    label: `${page.label} (${locale})`,
    url: `${prefix}/${locale}/${page.url}`,
    slug: `${locale}-${page.slug}`,
  })),
);

pageWithLocales.forEach(({ label, slug, url }) => {
  test(label, async ({ page }, testInfo) => {
    await page.goto(url);

    // Load all media marked as lazy
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForLoadState("networkidle");

    await page.screenshot({
      path: join(DIR_SCREENSHOTS, testInfo.project.name, `${slug}.png`),
      fullPage: true,
    });
  });
});

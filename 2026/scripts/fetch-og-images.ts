import { createWriteStream } from "node:fs";
import { mkdir, rm } from "node:fs/promises";
import { join } from "node:path";
import { Readable } from "node:stream";
import { finished } from "node:stream/promises";
import { ReadableStream } from "node:stream/web";
// @ts-expect-error --experimental-strip-types
import nextConfig from "../next.config.ts";
// @ts-expect-error --experimental-strip-types
import { TALKS } from "../src/constants/talks.ts";
// @ts-expect-error --experimental-strip-types
import { GENERAL_OG_IMAGE_ID, getOgImagePath, getTalkOgImageId } from "../src/lib/og/url.ts";

const DIR_OG_IMAGES = join(import.meta.dirname, "..", "screenshots", "ogp");

const defaultPages = [
  { path: "/", imageId: GENERAL_OG_IMAGE_ID },
  ...TALKS.map((talk) => ({
    path: `/en/talks/${talk.slug}`,
    imageId: getTalkOgImageId("en", talk.slug),
  })),
];

function pagesForUris(uris: string[]) {
  const basePath = nextConfig.basePath ?? "";
  const talkSlugs = new Set(TALKS.map((talk) => talk.slug));

  return uris.map((uri) => {
    const pathname = new URL(uri, "http://localhost").pathname;
    if (basePath && pathname !== basePath && !pathname.startsWith(`${basePath}/`)) {
      throw new Error(`Changed URI is outside the configured basePath: ${uri}`);
    }

    const route = (basePath ? pathname.slice(basePath.length) : pathname).replace(/\/$/, "") || "/";
    const talkMatch = route.match(/^\/(en|ja)\/talks\/([^/]+)$/);
    const imageId =
      talkMatch && talkSlugs.has(talkMatch[2]) ? getTalkOgImageId(talkMatch[1], talkMatch[2]) : GENERAL_OG_IMAGE_ID;
    const slug = route === "/" ? "top" : route.split("/").filter(Boolean).join("-");

    return {
      url: `http://localhost:3001${join(basePath, getOgImagePath(imageId))}`,
      slug,
    };
  });
}

function selectedPages() {
  const changedUris = process.env.CHANGED_URIS_JSON;
  if (changedUris === undefined) {
    return defaultPages.map(({ path, imageId }) => ({
      url: `http://localhost:3001${join(nextConfig.basePath!, getOgImagePath(imageId))}`,
      slug: path === "/" ? "top" : path.split("/").filter(Boolean).join("-"),
    }));
  }

  const uris: unknown = JSON.parse(changedUris);
  if (!Array.isArray(uris) || !uris.every((uri) => typeof uri === "string")) {
    throw new Error("CHANGED_URIS_JSON must be a JSON array of URI strings");
  }
  return pagesForUris(uris);
}

main();

async function main() {
  await rm(DIR_OG_IMAGES, { recursive: true, force: true });
  await mkdir(DIR_OG_IMAGES, { recursive: true });
  const pages = selectedPages();

  await Promise.all(
    pages.map(async ({ url, slug }) => {
      const response = await fetch(url);
      if (!response.ok || !response.body) {
        throw new Error(`Failed to fetch ${url}: ${response.status} ${response.statusText}`);
      }
      const stream = Readable.fromWeb(response.body as unknown as ReadableStream);
      const dist = stream.pipe(createWriteStream(join(DIR_OG_IMAGES, `${slug}.png`)));
      await finished(dist);
    }),
  );
}

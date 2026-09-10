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

const pages = [
  { path: "/", imageId: GENERAL_OG_IMAGE_ID },
  ...TALKS.map((talk) => ({
    path: `/en/talks/${talk.slug}`,
    imageId: getTalkOgImageId("en", talk.slug),
  })),
].map(({ path, imageId }) => ({
  url: `http://localhost:3001${join(
    nextConfig.basePath!,
    getOgImagePath(imageId),
  )}`,
  slug: path === "/" ? "top" : path.split("/").filter(Boolean).join("-"),
}));

main();

async function main() {
  await rm(DIR_OG_IMAGES, { recursive: true, force: true });
  await mkdir(DIR_OG_IMAGES, { recursive: true });

  await Promise.all(
    pages.map(async ({ url, slug }) => {
      return fetch(url)
        .then((res) => Readable.fromWeb(res.body! as unknown as ReadableStream))
        .then(async (stream) => {
          const dist = stream.pipe(
            createWriteStream(join(DIR_OG_IMAGES, `${slug}.png`)),
          );
          await finished(dist);
        });
    }),
  );
}

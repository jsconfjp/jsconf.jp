import { createWriteStream } from "node:fs";
import { mkdir, rm } from "node:fs/promises";
import { join } from "node:path";
import { Readable } from "node:stream";
import { finished } from "node:stream/promises";
import { ReadableStream } from "node:stream/web";
import nextConfig from "../next.config";

const DIR_OG_IMAGES = join(__dirname, "..", "screenshots", "ogp");

const pages = [{ label: "Top", url: "/" }].map((page) => ({
  ...page,
  url: `http://localhost:3001${join(
    nextConfig.basePath!,
    page.url,
    "opengraph-image"
  )}`,
  slug:
    page.url === "/" ? "top" : page.url.split("/").filter(Boolean).join("-"),
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
            createWriteStream(join(DIR_OG_IMAGES, `${slug}.png`))
          );
          await finished(dist);
        });
    })
  );
}

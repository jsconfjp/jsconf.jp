import { readFileSync } from "node:fs";
import path from "node:path";

export const GENERAL_OG_IMAGE_ID = "general.png";

export const getTalkOgImageId = (locale: string, slug: string) =>
  `talk-${locale}-${slug}.png`;

export const getOgImagePath = (imageId: string) =>
  `/og/opengraph-image/${imageId}`;

export const makeDataUrl = (imagePath: string) => {
  const imageData = readFileSync(imagePath);
  const base64 = imageData.toString("base64");
  const extension = path.extname(imagePath).toLowerCase();
  const mimeType = [".jpg", ".jpeg"].includes(extension)
    ? "image/jpeg"
    : extension === ".png"
      ? "image/png"
      : extension === ".svg"
        ? "image/svg+xml"
        : null;
  if (!mimeType) {
    throw new Error(`Cannot determine MIME type from image path: ${imagePath}`);
  }
  const dataUrl = `data:${mimeType};base64,${base64}`;
  return dataUrl;
};

import type { Talk } from "@/constants/talks";

export function getTalkDescription(
  talk: Pick<Talk, "description" | "descriptionEn" | "descriptionJa">,
  locale: string,
): string {
  return locale === "ja" ? (talk.descriptionJa ?? talk.description) : (talk.descriptionEn ?? talk.description);
}

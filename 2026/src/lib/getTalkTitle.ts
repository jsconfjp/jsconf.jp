import type { Talk } from "@/constants/talks";

/**
 * ロケールに応じたトークタイトルを返す。翻訳がない場合は元のタイトルにフォールバックする。
 */
export function getTalkTitle(talk: Pick<Talk, "title" | "titleEn" | "titleJa">, locale: string): string {
  return locale === "ja" ? (talk.titleJa ?? talk.title) : (talk.titleEn ?? talk.title);
}

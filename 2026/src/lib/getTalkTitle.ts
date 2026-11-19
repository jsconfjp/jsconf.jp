import type { Talk } from "@/constants/talks";

/**
 * ロケールに応じたトークタイトルを返す。日本語タイトルが用意されていない場合は元のタイトルにフォールバックする。
 */
export function getTalkTitle(talk: Pick<Talk, "title" | "titleJa">, locale: string): string {
  return locale === "ja" ? (talk.titleJa ?? talk.title) : talk.title;
}

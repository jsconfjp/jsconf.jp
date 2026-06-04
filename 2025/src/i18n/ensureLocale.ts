import { notFound } from "next/navigation";
import { hasLocale } from "next-intl";
import { Locale } from "./constants";
import { routing } from "./routing";

/**
 * ルートの `params.locale`（型上は string）を検証し、サポート対象の `Locale` に絞り込む。
 * 想定外の locale の場合は notFound() で 404 にする。
 * Next.js 16 の型付き params（locale: string）と next-intl の Locale 型拡張の橋渡し。
 */
export function ensureLocale(locale: string): Locale {
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  return locale;
}

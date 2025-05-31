export const LOCALE_COOKIE_NAME = "next-intl-locale";
export const LOCALES = ["en", "ja"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "en";
export const COOKIE_MAX_AGE = 31536000; // 1年（秒）

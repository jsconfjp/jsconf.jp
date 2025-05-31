import { getRequestConfig } from "next-intl/server";
import { cookies, headers } from "next/headers";
import {
  LOCALE_COOKIE_NAME,
  LOCALES,
  DEFAULT_LOCALE,
  type Locale,
} from "./constants";

async function getLocaleFromHeaders(): Promise<Locale> {
  const cookieStore = await cookies();
  const headersList = await headers();

  // クッキーから言語を取得
  const cookieLocale = cookieStore.get(LOCALE_COOKIE_NAME)?.value;
  if (cookieLocale && LOCALES.includes(cookieLocale as Locale)) {
    return cookieLocale as Locale;
  }

  // Accept-Languageヘッダーから言語を取得
  const acceptLanguage = headersList.get("accept-language");
  if (acceptLanguage) {
    for (const locale of LOCALES) {
      if (acceptLanguage.includes(locale)) {
        return locale;
      }
    }
  }

  return DEFAULT_LOCALE;
}

export default getRequestConfig(async () => {
  const locale = await getLocaleFromHeaders();

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});

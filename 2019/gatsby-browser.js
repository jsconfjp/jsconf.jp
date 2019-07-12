import i18n from "i18next"
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from "react-i18next"

// the translations
// (tip move them in a JSON file and import them)
const en = {
  translation: {
    "welcome": "(TODO: Welcome message)",
    "venue.name": "3331 Arts Chiyoda",
    "venue.address": "〒101-0021 6-11-14 Sotokanda Chiyoda-ku Tokyo",
    "venue.url": "https://www.3331.jp/rentalspace/"
  },
}
const ja = {
  translation: {
    "welcome": "(TODO: ようこそ)",
    "venue.name": "アーツ千代田 3331",
    "venue.address": "〒101-0021 東京都千代田区外神田6丁目11-14",
    "venue.url": "https://www.3331.jp/rentalspace/"
  },
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: { en, ja },
    fallbackLng: 'en',
    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false, // react already safes from xss
    },

    // https://github.com/i18next/i18next-browser-languageDetector#detector-options
    detection: {
      order: ['querystring', 'localStorage', 'navigator'],
      lookupQuerystring: 'lang',
      lookupCookie: 'lang',
      lookupLocalStorage: 'lang',
      caches: ['localStorage'],
      excludeCacheFor: ['cimode'],
    }
  })

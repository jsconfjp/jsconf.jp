import i18n from "i18next"
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from "react-i18next"

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  en: {
    translation: {
      "welcome": "(TODO: Welcome message)",
    },
  },
  ja: {
    translation: {
      "welcome": "(TODO: ようこそ)",
    },
  },
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
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

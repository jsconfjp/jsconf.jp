import i18n from "i18next"
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from "react-i18next"

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  en: {
    translation: {
      "siteName": "JSConf JP",
      "description": "jsconf.jp is a JavaScript festival in Japan powered by Japan Node.js Association. This is the first event of jsconf in Japan. We would love to become a bridge between Japanese Web Developers and International Web Developers.",
      "festivalPeriod": "November 30th, December 1st 2019",
    },
  },
  ja: {
    translation: {
      "siteName": "JSConf JP",
      "description": "jsconf.jp is a JavaScript festival in Japan powered by Japan Node.js Association. This is the first event of jsconf in Japan. We would love to become a bridge between Japanese Web Developers and International Web Developers.",
      "festivalPeriod": "November 30th, December 1st 2019",
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

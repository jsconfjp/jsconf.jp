import i18n from "i18next"
import LanguageDetector from "i18next-browser-languagedetector"
import { initReactI18next } from "react-i18next"
import { ja } from "./ja"
import { en } from "./en"

const resources = {
  ja,
  en
}

export const store = i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    keySeparator: false, // we do not use keys in form messages.welcome
    preload: ["en"], // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    },

    // https://github.com/i18next/i18next-browser-languageDetector#detector-options
    detection: {
      order: ["querystring", "localStorage", "navigator"],
      lookupQuerystring: "lang",
      lookupCookie: "lang",
      lookupLocalStorage: "lang",
      caches: ["localStorage"],
      excludeCacheFor: ["cimode"]
    }
  })

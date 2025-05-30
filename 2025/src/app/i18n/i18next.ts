import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import resourcesToBackend from "i18next-resources-to-backend";
import { initReactI18next } from "react-i18next/initReactI18next";
import { fallbackLng, languages } from "./settings";

const runsOnServerSide = typeof window === "undefined";

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(
    resourcesToBackend(
      (language: string, namespace: string) =>
        import(`./locales/${language}/${namespace}.json`)
    )
  )
  .init({
    supportedLngs: languages,
    fallbackLng,
    lng: runsOnServerSide ? fallbackLng : undefined, // サーバーサイドではフォールバック言語を使用
    detection: {
      order: ["localStorage", "cookie", "navigator"],
      caches: ["localStorage", "cookie"],
    },
    preload: runsOnServerSide ? languages : [],
    react: {
      useSuspense: false, // Suspenseを無効にしてhydrationエラーを防ぐ
    },
  });

export default i18next;

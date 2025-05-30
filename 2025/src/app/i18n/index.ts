import i18next from "./i18next";
import { fallbackLng } from "./settings";

export async function getT(ns: "about") {
  // サーバーサイドでは常にフォールバック言語を使用
  if (i18next.resolvedLanguage !== fallbackLng) {
    await i18next.changeLanguage(fallbackLng);
  }
  if (!i18next.hasLoadedNamespace(ns)) {
    await i18next.loadNamespaces(ns);
  }

  return {
    t: i18next.getFixedT(fallbackLng, ns),
    i18n: i18next,
  };
}

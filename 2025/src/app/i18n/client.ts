"use client";

import { CustomTypeOptions } from "i18next";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export function useI18n() {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState<string | undefined>(
    i18n.resolvedLanguage
  );

  useEffect(() => {
    const updateLanguage = () => {
      setLanguage(i18n.resolvedLanguage);
    };
    i18n.on("languageChanged", updateLanguage);
    i18n.on("loaded", updateLanguage);
    return () => {
      i18n.off("languageChanged", updateLanguage);
      i18n.off("loaded", updateLanguage);
    };
  }, [setLanguage, i18n]);

  return { i18n, language };
}
export function useT(ns: keyof CustomTypeOptions["resources"]) {
  const { t } = useTranslation(ns);
  return t;
}

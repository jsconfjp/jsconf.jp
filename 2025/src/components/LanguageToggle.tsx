"use client";

import { useI18n } from "@/app/i18n/client";

export function LanguageToggle() {
  const { i18n, language } = useI18n();

  const handleLanguageChange = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex gap-2">
      <button
        onClick={() => handleLanguageChange("ja")}
        className={`border-b-4 ${
          language === "ja" ? "border-b-primary" : "border-b-transparent"
        }`}
      >
        日本語
      </button>
      <button
        onClick={() => handleLanguageChange("en")}
        className={`border-b-4 ${
          language === "en" ? "border-b-primary" : "border-b-transparent"
        }`}
      >
        English
      </button>
    </div>
  );
}

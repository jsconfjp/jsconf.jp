"use client";

import { useI18n } from "@/app/i18n/client";

const languages = [
  { lang: "ja", label: "日本語" },
  { lang: "en", label: "English" },
];

export function LanguageToggle() {
  const { i18n, language } = useI18n();

  const handleLanguageChange = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex gap-2">
      {languages.map(({ lang, label }) => (
        <button
          key={lang}
          onClick={() => handleLanguageChange(lang)}
          className={`px-2 border-b-4 cursor-pointer font-bold ${
            language === lang ? "border-b-primary" : "border-b-transparent"
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}

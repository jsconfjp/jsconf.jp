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
    <div className="flex py-5 gap-2 divide-x divide-dimmed">
      {languages.map(({ lang, label }) => (
        <button
          type="button"
          key={lang}
          onClick={() => handleLanguageChange(lang)}
          className={`pr-2 font-bold underline underline-offset-8 decoration-4 ${
            language === lang
              ? "decoration-primary"
              : "cursor-pointer decoration-transparent hover:decoration-dimmed"
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}

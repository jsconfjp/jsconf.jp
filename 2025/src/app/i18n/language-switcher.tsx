"use client";

import { useRouter } from "next/navigation";
import { useI18n } from "./client";
import { languages, cookieName } from "./settings";

export function LanguageSwitcher() {
  const { language, i18n } = useI18n();
  const router = useRouter();

  const handleLanguageChange = async (newLanguage: string) => {
    // クッキーを設定
    document.cookie = `${cookieName}=${newLanguage}; path=/; max-age=31536000; SameSite=Lax`;

    // i18next の言語を変更
    await i18n.changeLanguage(newLanguage);

    // ページをリフレッシュして サーバーコンポーネントに反映
    router.refresh();
  };

  return (
    <div className="language-switcher">
      {languages.map((lang) => (
        <button
          key={lang}
          onClick={() => handleLanguageChange(lang)}
          className={`px-3 py-1 rounded ${
            language === lang
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          {lang.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

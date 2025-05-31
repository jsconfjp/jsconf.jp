"use client";

import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { useTranslations } from "next-intl";
import { LOCALE_COOKIE_NAME, COOKIE_MAX_AGE } from "../i18n/constants";
import clsx from "clsx";

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const t = useTranslations("lang");

  const languages = [
    { lang: "ja", label: t("japanese") },
    { lang: "en", label: t("english") },
  ];

  const handleLanguageChange = (newLocale: string) => {
    // クッキーを設定
    document.cookie = `${LOCALE_COOKIE_NAME}=${newLocale}; path=/; max-age=${COOKIE_MAX_AGE}; SameSite=Lax`;

    startTransition(() => {
      // ページをリフレッシュしてサーバーコンポーネントに反映
      router.refresh();
    });
  };

  return (
    <div className="flex py-5 gap-2 divide-x divide-dimmed">
      {languages.map(({ lang, label }) => (
        <button
          type="button"
          key={lang}
          onClick={() => handleLanguageChange(lang)}
          disabled={isPending}
          className={clsx(
            "pr-2 font-bold underline underline-offset-8 decoration-4",
            locale === lang
              ? "decoration-primary"
              : "cursor-pointer decoration-transparent hover:decoration-dimmed",
            isPending ? "opacity-50 cursor-not-allowed" : ""
          )}
        >
          {label}
        </button>
      ))}
    </div>
  );
}

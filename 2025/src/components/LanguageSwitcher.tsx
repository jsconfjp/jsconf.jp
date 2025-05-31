"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import clsx from "clsx";

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations("lang");

  const languages = [
    { lang: "ja", label: t("japanese") },
    { lang: "en", label: t("english") },
  ];

  const handleLanguageChange = (newLocale: string) => {
    router.push(pathname.replace(`/${locale}`, `/${newLocale}`));
  };

  return (
    <div className="flex py-5 gap-2 divide-x divide-dimmed">
      {languages.map(({ lang, label }) => (
        <button
          type="button"
          key={lang}
          onClick={() => handleLanguageChange(lang)}
          className={clsx(
            "pr-2 font-bold underline underline-offset-8 decoration-4",
            locale === lang
              ? "decoration-primary"
              : "cursor-pointer decoration-transparent hover:decoration-dimmed"
          )}
        >
          {label}
        </button>
      ))}
    </div>
  );
}

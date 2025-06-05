"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLocale } from "next-intl";
import { useTranslations } from "next-intl";

export function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const t = useTranslations("lang");

  const languages = [
    { lang: "ja", label: t("japanese") },
    { lang: "en", label: t("english") },
  ];

  return (
    <div className="flex py-5 gap-2 divide-x divide-dimmed">
      {languages.map(({ lang, label }) => (
        <Link
          key={lang}
          href={pathname.replace(`/${locale}`, `/${lang}`)}
          className={clsx(
            "pr-2 font-bold underline underline-offset-8 decoration-4",
            locale === lang
              ? "decoration-primary"
              : "cursor-pointer decoration-transparent hover:decoration-dimmed"
          )}
        >
          {label}
        </Link>
      ))}
    </div>
  );
}

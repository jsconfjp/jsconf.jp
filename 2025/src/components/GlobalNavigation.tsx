"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { Link, usePathname } from "@/i18n/navigation";
import Bars3Icon from "@heroicons/react/24/outline/Bars3Icon";
import XMarkIcon from "@heroicons/react/24/outline/XMarkIcon";
import logoSrc from "@/../public/logo.svg";
import clsx from "clsx";

export function GlobalNavigation() {
  const t = useTranslations("navigation");
  const pathname = usePathname();
  const navigations = [
    {
      ready: false,
      label: t("speakers"),
      href: "/speakers",
    },
    {
      ready: true,
      label: t("venue"),
      href: "/venue",
    },
    {
      ready: false,
      label: t("schedule"),
      href: "/schedule",
    },
    {
      ready: false,
      label: t("sponsors"),
      href: "/sponsors",
    },
    {
      ready: false,
      label: t("tickets"),
      href: "https://example.com",
      primary: true,
    },
  ].map((item) => ({
    ...item,
    active: pathname === item.href,
  }));
  const spacerItems = navigations.filter(({ ready }) => !ready);
  const readyItems = navigations.filter(({ ready }) => ready);

  return (
    <header className="shadow-sm bg-white px-2 lg:px-0">
      <div className="flex items-stretch justify-between max-w-screen-lg mx-auto">
        <Link href="/" className="flex items-center">
          <Image
            src={logoSrc}
            fetchPriority="high"
            alt="JSConf JP"
            width={46}
            height={46}
            className="mr-4"
          />
        </Link>
        <LanguageSwitcher />
        <nav className="flex-1 items-center justify-end gap-4 flex lg:hidden">
          <details className="relative [&[open]_:first-child]:hidden [&[open]_:last-child]:block">
            <summary
              className="list-none text-2xl p-2 cursor-pointer flex"
              aria-label="Show/Hide navigations"
            >
              <Bars3Icon className="w-6 h-6" />
              <XMarkIcon className="w-6 h-6 hidden" />
            </summary>
            <div className="absolute top-full right-0 left-0 z-10 bg-white border-t border-dimmed divide-y divide-dimmed/50 shadow-lg">
              {readyItems.map(({ label, href, primary, active }) => (
                <Link
                  key={href}
                  href={href}
                  className={clsx(
                    "py-4 flex-1 flex items-center justify-center text-md font-bold underline underline-offset-6 decoration-4",
                    primary && "bg-primary text-white hover:decoration-white",
                    active
                      ? "decoration-primary"
                      : "decoration-transparent hover:decoration-dimmed"
                  )}
                >
                  {label}
                </Link>
              ))}
            </div>
          </details>
        </nav>
        <nav className="flex-1 items-center gap-4 hidden lg:flex">
          {[...spacerItems, ...readyItems].map(
            ({ label, href, primary, ready, active }) =>
              ready ? (
                <Link
                  key={href}
                  href={href}
                  className={clsx(
                    "py-5 h-full flex-1 flex items-center justify-center text-lg font-bold underline underline-offset-8 decoration-4",
                    primary && "bg-primary text-white hover:decoration-white",
                    active
                      ? "decoration-primary"
                      : "decoration-transparent hover:decoration-dimmed"
                  )}
                >
                  {label}
                </Link>
              ) : (
                // readyでない要素があっても幅の計算は同一になるように空の要素を入れておく
                <div key={href} className="py-5 h-full flex-1">
                  &nbsp;
                </div>
              )
          )}
        </nav>
      </div>
    </header>
  );
}

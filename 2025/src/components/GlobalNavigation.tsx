"use client";

import Bars3Icon from "@heroicons/react/24/outline/Bars3Icon";
import XMarkIcon from "@heroicons/react/24/outline/XMarkIcon";
import clsx from "clsx";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useState } from "react";
import logoSrc from "@/../public/logo.svg";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { Link, usePathname } from "@/i18n/navigation";

export function GlobalNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations("navigation");
  const pathname = usePathname();
  const navigations = [
    {
      ready: true,
      label: t("speakers"),
      href: "/speakers",
    },
    {
      ready: true,
      label: t("venue"),
      href: "/venue",
    },
    {
      ready: true,
      label: t("schedule"),
      href: "/schedule",
    },
    {
      ready: true,
      label: t("sponsors"),
      href: "/sponsors",
    },
    {
      ready: true,
      label: t("tickets"),
      href: "https://pretix.eu/jsconfjp/2025/",
      primary: true,
      target: "_blank",
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
            width={40}
            height={40}
            className="mr-4"
          />
        </Link>
        <LanguageSwitcher />
        <nav className="flex-1 items-center justify-end gap-4 flex lg:hidden">
          <button
            type="button"
            className="text-2xl p-2 cursor-pointer"
            aria-label="Show/Hide navigations"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {isOpen ? (
              <XMarkIcon className="w-6 h-6" />
            ) : (
              <Bars3Icon className="w-6 h-6" />
            )}
          </button>
        </nav>
        <nav className="flex-1 items-center gap-4 hidden lg:flex">
          {[...spacerItems, ...readyItems].map(
            ({ label, href, primary, ready, active, target }) =>
              ready ? (
                <Link
                  key={href}
                  href={href}
                  target={target}
                  className={clsx(
                    "py-5 h-full flex-1 flex items-center justify-center text-lg font-bold underline underline-offset-8 decoration-4",
                    primary && "bg-primary text-white hover:decoration-white",
                    active
                      ? "decoration-primary"
                      : "decoration-transparent hover:decoration-dimmed",
                  )}
                >
                  {label}
                </Link>
              ) : (
                // readyでない要素があっても幅の計算は同一になるように空の要素を入れておく
                <div key={href} className="py-5 h-full flex-1">
                  &nbsp;
                </div>
              ),
          )}
        </nav>
      </div>
      <nav
        className={clsx(
          "flex-1 items-center gap-4 border-t-1 border-dimmed divide-y-1 divide-dimmed/50",
          isOpen ? "visible" : "hidden",
        )}
      >
        {readyItems.map(({ label, href, primary, active }) => (
          <Link
            key={href}
            href={href}
            className={clsx(
              "py-4 flex-1 flex items-center justify-center text-md font-bold underline underline-offset-6 decoration-4",
              primary && "bg-primary text-white hover:decoration-white",
              active
                ? "decoration-primary"
                : "decoration-transparent hover:decoration-dimmed",
            )}
          >
            {label}
          </Link>
        ))}
      </nav>
    </header>
  );
}

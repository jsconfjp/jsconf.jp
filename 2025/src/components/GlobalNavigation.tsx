import Image from "next/image";
import { useTranslations } from "next-intl";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { Link } from "@/i18n/navigation";
import logoSrc from "@/../public/logo.svg";

export function GlobalNavigation() {
  const t = useTranslations("navigation");
  const navigations = [
    {
      ready: false,
      label: t("speakers"),
      href: "/speakers",
    },
    {
      ready: false,
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
      href: "/tickets",
      primary: true,
    },
  ];

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
        <nav className="flex-1 flex items-center gap-4">
          {navigations.map(({ label, href, primary, ready }) =>
            ready ? (
              <Link
                key={href}
                href={href}
                className={
                  "py-5 h-full flex-1 flex items-center justify-center text-lg font-bold underline underline-offset-8 decoration-4 decoration-transparent " +
                  (primary
                    ? "bg-primary text-white hover:decoration-white"
                    : "hover:decoration-dimmed")
                }
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

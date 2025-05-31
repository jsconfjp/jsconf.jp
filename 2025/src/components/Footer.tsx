import Link from "next/link";
import { useTranslations } from "next-intl";

export function Footer() {
  const tNav = useTranslations("navigation");
  const tAbout = useTranslations("about");
  const links = [
    {
      label: tNav("nodejs"),
      href: "https://nodejs.org/",
      target: "_blank",
    },
    {
      label: tNav("previousJsconfJp"),
      href: "https://jsconf.jp/2024",
      target: "_blank",
    },
    {
      label: tNav("japanNodejsAssociation"),
      href: "https://nodejs.jp/",
      target: "_blank",
    },
    {
      label: tNav("codeOfConduct"),
      href: "/doc/code-of-conduct",
    },
    {
      label: tNav("specifiedCommercialTransactionsAct"),
      href: "/doc/commercial-transactions-act",
    },
  ];

  return (
    <footer className="bg-dimmed py-10 flex flex-col items-center">
      <nav className="flex flex-col items-center md:flex-row gap-2 md:gap-4 md:divide-x-1 md:divide-gray-400">
        {links.map(({ label, href, target }) => (
          <Link
            key={href}
            target={target}
            href={href}
            className="pr-4 text-sm hover:underline"
          >
            {label}
          </Link>
        ))}
      </nav>
      <small className="pt-2 text-sm">{tAbout("copyright")}</small>
      <address className="pt-1 text-sm">{tAbout("companyAddress")}</address>
    </footer>
  );
}

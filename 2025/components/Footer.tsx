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
      <nav className="flex gap-4 divide-x-1 divide-gray-400">
        {links.map(({ label, href, target }) => (
          <Link key={href} target={target} href={href} className="pr-4 text-sm">
            {label}
          </Link>
        ))}
      </nav>
      <small className="text-sm">{tAbout("copyright")}</small>
      <address className="text-sm">{tAbout("companyAddress")}</address>
    </footer>
  );
}

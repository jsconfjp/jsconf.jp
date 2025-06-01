import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import twitterXUrl from "@/assets/twitter-x.svg";
import githubUrl from "@/assets/github.svg";
import Image from "next/image";

export function Footer() {
  const tNav = useTranslations("navigation");
  const tAbout = useTranslations("about");
  const asideLinks = [
    {
      icon: twitterXUrl,
      alt: "X",
      href: "https://x.com/jsconfjp",
      target: "_blank",
    },
    {
      icon: githubUrl,
      alt: "GitHub",
      href: "https://github.com/jsconfjp/jsconf.jp",
      target: "_blank",
    },
  ];
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
      <nav className="flex flex-col items-center md:flex-row gap-2 md:gap-4">
        {asideLinks.map(({ icon, alt, href, target }) => (
          <Link
            key={href}
            target={target}
            href={href}
            className="pr-4 text-sm hover:underline"
          >
            <Image src={icon} alt={alt} width={24} height={24} />
          </Link>
        ))}
      </nav>
      <nav className="mt-4 flex flex-col items-center md:flex-row gap-2 md:gap-4 md:divide-x-1 md:divide-gray-400">
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
      <small className="mt-2 text-sm">{tAbout("copyright")}</small>
      <address className="mt-1 text-sm">{tAbout("companyAddress")}</address>
    </footer>
  );
}

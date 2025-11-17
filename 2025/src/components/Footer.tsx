import Image from "next/image";
import { useTranslations } from "next-intl";
import githubUrl from "@/assets/github.svg";
import twitterXUrl from "@/assets/twitter-x.svg";
import youtubeUrl from "@/assets/youtube.png";
import {
  GITHUB_URL,
  JNA_URL,
  NODEJS_OFFICIAL_URL,
  PREVIOUS_URL,
  X_URL,
  YOUTUBE_URL,
} from "@/constants/external";
import { Link } from "@/i18n/navigation";

export function Footer() {
  const tNav = useTranslations("navigation");
  const tAbout = useTranslations("about");
  const asideLinks = [
    {
      icon: twitterXUrl,
      alt: "X",
      href: X_URL,
      target: "_blank",
    },
    {
      icon: githubUrl,
      alt: "GitHub",
      href: GITHUB_URL,
      target: "_blank",
    },
    {
      icon: youtubeUrl,
      alt: "YouTube",
      href: YOUTUBE_URL,
      target: "_blank",
    },
  ];
  const links = [
    {
      label: tNav("nodejs"),
      href: NODEJS_OFFICIAL_URL,
      target: "_blank",
    },
    {
      label: tNav("previousJsconfJp"),
      href: PREVIOUS_URL,
      target: "_blank",
    },
    {
      label: tNav("japanNodejsAssociation"),
      href: JNA_URL,
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
      <nav className="flex items-center gap-2">
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

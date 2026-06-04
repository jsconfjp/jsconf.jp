import Image from "next/image";
import { useTranslations } from "next-intl";
import logoSrc from "@/assets/logo.png";

export function Hero() {
  const t = useTranslations("about");

  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-16">
      {/* 2026 の動くロゴ(SVG)が用意できるまでは、2024 の静的ロゴを暫定表示する */}
      <Image
        src={logoSrc}
        width={240}
        height={240}
        priority
        alt={t("title")}
      />
      <div>
        <h1 className="text-5xl md:text-6xl font-bold">{t("title")}</h1>
        <time className="text-2xl font-bold">{t("eventDate")}</time>
        <p className="text-lg mt-4">{t("description")}</p>
      </div>
    </div>
  );
}

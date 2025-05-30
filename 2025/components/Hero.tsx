"use client";

import Image from "next/image";
import { useT } from "../src/app/i18n/client";
import heroImage from "../src/assets/logo.svg";

export function Hero() {
  const t = useT("about");

  return (
    <div className="flex items-center justify-center gap-16">
      <Image src={heroImage} alt={t("title")} width={240} height={240} />
      <div>
        <h1 className="text-6xl font-bold">{t("title")}</h1>
        <time className="text-2xl font-bold">{t("eventDate")}</time>
        <p className="text-lg mt-4">{t("description")}</p>
      </div>
    </div>
  );
}

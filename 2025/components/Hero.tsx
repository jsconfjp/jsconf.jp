"use client";

import { useT } from "../src/app/i18n/client";

export function Hero() {
  const t = useT("about");

  return (
    <div>
      <h1>{t("title")}</h1>
      <p>{t("description")}</p>
      <time>{t("eventDate")}</time>
    </div>
  );
}

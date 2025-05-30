"use client";

import CoCJa from "@/doc/code-of-conduct-ja.md";
import CoCEn from "@/doc/code-of-conduct-en.md";
import { useI18n } from "@/app/i18n/client";

export function CodeOfConduct() {
  const { language } = useI18n();
  return language === "ja" ? <CoCJa /> : <CoCEn />;
}

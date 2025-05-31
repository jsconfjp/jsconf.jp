import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import CoCJa from "@/doc/code-of-conduct-ja.md";
import CoCEn from "@/doc/code-of-conduct-en.md";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations({ locale: "en", namespace: "navigation" });
  return {
    title: t("codeOfConduct"),
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return locale === "ja" ? <CoCJa /> : <CoCEn />;
}

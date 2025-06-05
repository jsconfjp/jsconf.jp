import { Metadata } from "next";
import { Locale } from "next-intl";
import { getTranslations } from "next-intl/server";
import CoCEn from "@/doc/code-of-conduct-en.md";
import CoCJa from "@/doc/code-of-conduct-ja.md";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({
    locale: locale as Locale,
    namespace: "navigation",
  });
  return {
    title: t("codeOfConduct"),
  };
}

export default async function Page({ params }: Props) {
  const { locale } = await params;
  return locale === "ja" ? <CoCJa /> : <CoCEn />;
}

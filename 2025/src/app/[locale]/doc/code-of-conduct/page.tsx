import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import CoCEn from "@/doc/code-of-conduct-en.md";
import CoCJa from "@/doc/code-of-conduct-ja.md";
import { Locale } from "@/i18n/constants";

type Params = { locale: Locale };

type Props = {
  params: Promise<Params>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
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

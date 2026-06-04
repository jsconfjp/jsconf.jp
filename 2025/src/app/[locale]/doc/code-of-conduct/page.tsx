import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import CoCEn from "@/doc/code-of-conduct-en.md";
import CoCJa from "@/doc/code-of-conduct-ja.md";
import { ensureLocale } from "@/i18n/ensureLocale";

type Params = { locale: string };

type Props = {
  params: Promise<Params>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = ensureLocale((await params).locale);
  const t = await getTranslations({
    locale,
    namespace: "navigation",
  });
  return {
    title: t("codeOfConduct"),
  };
}

export default async function Page({ params }: Props) {
  const locale = ensureLocale((await params).locale);
  return locale === "ja" ? <CoCJa /> : <CoCEn />;
}

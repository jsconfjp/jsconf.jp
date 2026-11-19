import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import CommercialTransactionsAct from "@/doc/commercial-transactions-act.md";
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
    robots: "noindex",
    title: t("specifiedCommercialTransactionsAct"),
  };
}

export default async function Page({}: Props) {
  return <CommercialTransactionsAct />;
}

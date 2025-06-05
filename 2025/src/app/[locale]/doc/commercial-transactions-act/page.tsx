import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import CommercialTransactionsAct from "@/doc/commercial-transactions-act.md";
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
    robots: "noindex",
    title: t("specifiedCommercialTransactionsAct"),
  };
}

export default async function Page({}: Props) {
  return <CommercialTransactionsAct />;
}

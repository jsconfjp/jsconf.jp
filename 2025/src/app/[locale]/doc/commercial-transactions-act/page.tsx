import CommercialTransactionsAct from "@/doc/commercial-transactions-act.md";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Locale } from "next-intl";

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
    robots: "noindex",
    title: t("specifiedCommercialTransactionsAct"),
  };
}

export default async function Page({}: Props) {
  return <CommercialTransactionsAct />;
}

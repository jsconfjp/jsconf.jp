import CommercialTransactionsAct from "@/doc/commercial-transactions-act.md";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations({ locale: "en", namespace: "navigation" });
  return {
    robots: "noindex",
    title: t("specifiedCommercialTransactionsAct"),
  };
}

export default function Page() {
  return <CommercialTransactionsAct />;
}

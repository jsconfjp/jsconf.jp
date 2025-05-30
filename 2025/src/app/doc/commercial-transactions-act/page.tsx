import CommercialTransactionsAct from "@/doc/commercial-transactions-act.md";
import { Metadata } from "next";

export const metadata: Metadata = {
  robots: "noindex",
  title: "特定商法取引法に基づく表記",
};

export default function Page() {
  return <CommercialTransactionsAct />;
}

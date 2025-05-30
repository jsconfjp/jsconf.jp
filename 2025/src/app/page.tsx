import { Metadata } from "next";
import { Hero } from "../../components/Hero";
import { getT } from "./i18n";

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getT("about");
  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function Home() {
  return (
    <div>
      <Hero />
    </div>
  );
}

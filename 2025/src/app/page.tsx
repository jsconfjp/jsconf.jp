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
    <div className="max-w-screen-lg mx-auto">
      <div className="max-w-screen-md mx-auto mt-32">
        <Hero />
      </div>
    </div>
  );
}

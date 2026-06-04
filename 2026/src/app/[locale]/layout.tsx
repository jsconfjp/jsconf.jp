import { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { PropsWithChildren } from "react";
import "@/app/globals.css";
import bgUrl from "@/assets/bg.webp";
import { Footer } from "@/components/Footer";
import { GlobalNavigation } from "@/components/GlobalNavigation";
import { LOCALES } from "@/i18n/constants";
import { ensureLocale } from "@/i18n/ensureLocale";
// import bgFlipXUrl from "@/assets/bg-flip-x.webp";

type Params = { locale: string };

type Props = {
  params: Promise<Params>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = ensureLocale((await params).locale);
  const t = await getTranslations({
    locale,
    namespace: "about",
  });
  return {
    title: {
      template: `%s | ${t("title")}`,
      default: t("title"),
    },
    description: t("description"),
    openGraph: {
      siteName: t("title"),
    },
  };
}

export function generateStaticParams(): Params[] {
  return LOCALES.map((locale) => ({ locale }));
}

export default async function Layout({
  children,
  params,
}: PropsWithChildren<Props>) {
  const locale = ensureLocale((await params).locale);

  setRequestLocale(locale);

  return (
    <html lang={locale}>
      <body
        className="antialiased flex flex-col min-h-screen"
        style={{
          // FIXME: まだコンテンツが揃わずページの高さが足りないので1枚だけ表示
          // backgroundImage: `url(${bgUrl.src}), url(${bgFlipXUrl.src})`,
          backgroundImage: `url(${bgUrl.src})`,
          backgroundRepeat: "no-repeat, no-repeat",
          backgroundPosition: "right -300px top -830px, left -450px center",
          backgroundSize: "100%, 120%",
        }}
      >
        <NextIntlClientProvider>
          <GlobalNavigation />
          <main className="flex-1">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

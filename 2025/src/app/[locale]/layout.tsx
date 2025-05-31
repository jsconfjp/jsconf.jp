import { Locale, NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { GlobalNavigation } from "@/components/GlobalNavigation";
import { Footer } from "@/components/Footer";
import bgUrl from "@/assets/bg.png";
import { Metadata } from "next";
import { Viewport } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { LOCALES } from "@/i18n/constants";
import "@/app/globals.css";
import { PropsWithChildren } from "react";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({
    locale: locale as Locale,
    namespace: "about",
  });
  return {
    title: {
      template: `%s | ${t("title")}`,
      default: t("title"),
    },
    description: t("description"),
  };
}

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: PropsWithChildren<Props>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <html lang={locale}>
      <body
        className="antialiased flex flex-col min-h-screen"
        style={{
          // FIXME: まだコンテンツが揃わずページの高さが足りないので1枚だけ表示
          backgroundImage: `url(${bgUrl.src})`,
          // backgroundImage: `url(${bgUrl.src}), url(${bgFlipXUrl.src})`,
          backgroundRepeat: "no-repeat, no-repeat",
          backgroundPosition: "right -300px top -830px, left -450px center",
          backgroundSize: "100%, 120%",
        }}
      >
        <NextIntlClientProvider>
          <GlobalNavigation />
          <main className="flex-1">{children}</main>
          <div className="mt-24">
            <Footer />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

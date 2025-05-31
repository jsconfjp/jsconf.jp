import type { Metadata, Viewport } from "next";
import "./globals.css";
import { GlobalNavigation } from "../../components/GlobalNavigation";
import { Footer } from "../../components/Footer";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages, getTranslations } from "next-intl/server";
import bgUrl from "@/assets/bg.png";
// import bgFlipXUrl from "@/assets/bg-flip-x.png";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations({ locale: "en", namespace: "about" });
  return {
    title: {
      template: `%s | ${t("title")}`,
      default: t("title"),
    },
    description: t("description"),
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

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
        <NextIntlClientProvider messages={messages}>
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

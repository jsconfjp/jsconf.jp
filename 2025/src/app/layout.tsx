import type { Metadata } from "next";
import "./globals.css";
import { GlobalNavigation } from "../../components/GlobalNavigation";
import { Footer } from "../../components/Footer";
import { I18nProvider } from "../components/I18nProvider";
import bgUrl from "@/assets/bg.png";
// import bgFlipXUrl from "@/assets/bg-flip-x.png";

export async function generateMetadata(): Promise<Metadata> {
  const about = await import("@/app/i18n/locales/en/about.json");
  return {
    title: {
      template: `%s | ${about.title}`,
      default: about.title,
    },
    description: about.description,
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
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
        <I18nProvider>
          <GlobalNavigation />
          <main className="flex-1">{children}</main>
          <div className="mt-24">
            <Footer />
          </div>
        </I18nProvider>
      </body>
    </html>
  );
}

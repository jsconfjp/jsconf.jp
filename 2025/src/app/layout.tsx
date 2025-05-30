import type { Metadata } from "next";
import "./globals.css";
import { GlobalNavigation } from "../../components/GlobalNavigation";
import { Footer } from "../../components/Footer";
import { I18nProvider } from "../components/I18nProvider";

export const metadata: Metadata = {
  title: "JSConf Japan 2025",
  description: "日本最大級のJavaScriptカンファレンス",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="antialiased flex flex-col min-h-screen">
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

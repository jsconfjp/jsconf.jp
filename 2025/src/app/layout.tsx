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
      <body className="antialiased">
        <I18nProvider>
          <GlobalNavigation />
          <main>{children}</main>
          <Footer />
        </I18nProvider>
      </body>
    </html>
  );
}

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "%s | JSConf JP 2025",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="max-w-screen-md mx-auto">{children}</div>;
}

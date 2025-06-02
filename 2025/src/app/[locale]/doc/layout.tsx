import { PageContainer } from "@/components/PageContainer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <PageContainer>{children}</PageContainer>;
}

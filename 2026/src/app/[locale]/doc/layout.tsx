import { PageContainer } from "@/components/PageContainer";

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <PageContainer>{children}</PageContainer>;
}

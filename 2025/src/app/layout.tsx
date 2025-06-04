import { Metadata, Viewport } from "next";
import en from "@/../messages/en.json";
import { unstable_ViewTransition as ViewTransition } from "react";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export async function generateMetadata(): Promise<Metadata> {
  return {
    metadataBase: new URL("https://jsconf.jp"),
    title: {
      template: `%s | ${en.about.title}`,
      default: en.about.title,
    },
    description: en.about.description,
    openGraph: {
      type: "website",
      siteName: en.about.title,
    },
    twitter: {
      card: "summary_large_image",
      site: "@jsconfjp",
    },
  };
}

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ViewTransition>{children}</ViewTransition>;
}

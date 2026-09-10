/// <reference types="react/canary" />
import { Metadata, Viewport } from "next";
import { ViewTransition } from "react";
import en from "@/../messages/en.json";
import { GENERAL_OG_IMAGE_ID, getOgImagePath } from "@/lib/og/url";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export async function generateMetadata(): Promise<Metadata> {
  return {
    metadataBase: new URL("https://jsconf.jp/2026"),
    title: {
      template: `%s | ${en.about.title}`,
      default: en.about.title,
    },
    description: en.about.description,
    openGraph: {
      type: "website",
      siteName: en.about.title,
      images: [
        {
          url: getOgImagePath(GENERAL_OG_IMAGE_ID),
          width: 1200,
          height: 630,
        },
      ],
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

import { Metadata, Viewport } from "next";
import en from "@/../messages/en.json";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export async function generateMetadata(): Promise<Metadata> {
  return {
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

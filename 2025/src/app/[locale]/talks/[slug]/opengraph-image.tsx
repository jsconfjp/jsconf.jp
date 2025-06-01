import { TalkThumbnail } from "@/components/og/TalkThumbnail";
import { TALKS } from "@/constants/talks";
import { Locale, LOCALES } from "@/i18n/constants";
import { generateImage } from "@/lib/og/image";
import { setRequestLocale } from "next-intl/server";

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export const dynamic = "force-static";
export const contentType = "image/png";

export async function generateStaticParams() {
  return LOCALES.flatMap((locale) =>
    TALKS.map((talk) => ({
      locale,
      slug: talk.slug,
    }))
  );
}

export default async function Image({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale as Locale);

  const talk = TALKS.find((talk) => talk.slug === slug);
  if (!talk) {
    throw new Error(`Talk not found: ${slug}`);
  }

  return generateImage(<TalkThumbnail talk={talk} />);
}

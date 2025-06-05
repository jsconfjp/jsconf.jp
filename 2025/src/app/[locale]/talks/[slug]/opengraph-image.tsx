import { TalkThumbnail } from "@/components/og/TalkThumbnail";
import { Locale, LOCALES } from "@/i18n/constants";
import { generateImage } from "@/lib/og/image";
import { setRequestLocale } from "next-intl/server";
import { getTalkSessions } from "@/lib/getTalkSessions";
import { findTalkSession } from "@/lib/findTalkSession";

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export const dynamic = "force-static";
export const contentType = "image/png";

export async function generateStaticParams() {
  const talkSessions = getTalkSessions();

  return LOCALES.flatMap((locale) =>
    talkSessions.map((session) => ({
      locale,
      slug: session.talk.slug,
    }))
  );
}

export default async function Image({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale as Locale);

  const session = findTalkSession(slug);

  return generateImage(<TalkThumbnail session={session} />);
}

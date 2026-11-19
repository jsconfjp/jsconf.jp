import { setRequestLocale } from "next-intl/server";
import { TalkThumbnail } from "@/components/og/TalkThumbnail";
import { TalkSlug } from "@/constants/talks";
import { LOCALES } from "@/i18n/constants";
import { ensureLocale } from "@/i18n/ensureLocale";
import { findTalkSession } from "@/lib/findTalkSession";
import { getTalkSessions } from "@/lib/getTalkSessions";
import { generateImage } from "@/lib/og/image";

type Params = { locale: string; slug: string };

type Props = {
  params: Promise<Params>;
};

export const dynamic = "force-static";
export const contentType = "image/png";

export async function generateStaticParams(): Promise<Params[]> {
  const talkSessions = getTalkSessions();

  return LOCALES.flatMap((locale) =>
    talkSessions.map((session) => ({
      locale,
      slug: session.talk.slug,
    })),
  );
}

export default async function Image({ params }: Props) {
  const { locale: rawLocale, slug } = await params;
  setRequestLocale(ensureLocale(rawLocale));

  const session = findTalkSession(slug as unknown as TalkSlug);

  return generateImage(<TalkThumbnail session={session} />);
}

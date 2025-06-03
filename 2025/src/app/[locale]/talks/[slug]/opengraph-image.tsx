import { TalkThumbnail } from "@/components/og/TalkThumbnail";
import { TALKS } from "@/constants/talks";
import { SCHEDULE } from "@/constants/schedule";
import { Locale, LOCALES } from "@/i18n/constants";
import { generateImage } from "@/lib/og/image";
import { setRequestLocale } from "next-intl/server";

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export const dynamic = "force-static";
export const contentType = "image/png";

export async function generateStaticParams() {
  // SCHEDULEのtalkセッションからslugを生成
  const talkSessions = SCHEDULE.filter((session) => session.kind === "talk");

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

  const talk = TALKS.find((talk) => talk.slug === slug);
  if (!talk) {
    throw new Error(`Talk not found: ${slug}`);
  }

  const session = SCHEDULE.find((s) => s.kind === "talk" && s.talk === talk);
  if (!session || session.kind !== "talk") {
    throw new Error(`Session not found for talk: ${slug}`);
  }

  return generateImage(<TalkThumbnail session={session} />);
}

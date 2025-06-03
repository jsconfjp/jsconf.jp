import { Chip } from "@/components/Chip";
import { Markdown } from "@/components/Markdown";
import { SCHEDULE } from "@/constants/schedule";
import { Locale, LOCALES } from "@/i18n/constants";
import { Metadata } from "next";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import Image from "next/image";
import { use } from "react";
import { PageContainer } from "@/components/PageContainer";

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export function generateStaticParams() {
  const talkSessions = SCHEDULE.filter((session) => session.kind === "talk");

  return talkSessions.flatMap((session) =>
    LOCALES.map((locale) => ({
      locale,
      slug: session.talk.slug,
    }))
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  setRequestLocale(locale as Locale);

  const session = SCHEDULE.find(
    (s) => s.kind === "talk" && s.talk.slug === slug
  );
  if (!session || session.kind !== "talk") {
    throw new Error(`session not found: ${slug}`);
  }

  return {
    title: session.talk.title,
    description: session.talk.description,
  };
}

export default function Page({ params }: Props) {
  const { locale, slug } = use(params);
  setRequestLocale(locale as Locale);

  const t = useTranslations("talks");
  // SCHEDULEからこのtalkに対応するセッション情報を取得
  const session = SCHEDULE.find(
    (s) => s.kind === "talk" && s.talk.slug === slug
  );
  if (!session || session.kind !== "talk") {
    throw new Error(`session not found: ${slug}`);
  }

  return (
    <PageContainer>
      <p>{t(`kind.${session.talk.kind}`)}</p>
      <h1 className="my-1 text-3xl font-bold">{session.talk.title}</h1>
      {session && (
        <p className="my-2 flex items-center gap-2">
          <time>
            {session.startTime}-{session.endTime}
          </time>
          {session.track !== "all" && (
            <Chip track={session.track}>{t(`track.${session.track}`)}</Chip>
          )}
          <Chip>{session.talk.language}</Chip>
        </p>
      )}
      <div className="mt-4">
        <Markdown>{session.talk.description}</Markdown>
      </div>
      <ul className="mt-8 flex flex-col gap-2">
        {session.talk.speakers.map((speaker) => (
          <li
            key={speaker.name}
            className="flex items-center gap-4 bg-primary/10 p-6 rounded-md"
          >
            <div className="relative aspect-square w-48">
              <Image
                src={
                  speaker.type === "speaker"
                    ? speaker.avatarUrl
                    : speaker.logoUrl
                }
                alt={`${speaker.name}'s avatar`}
                fill
                objectFit="cover"
              />
            </div>
            <div className="flex-1 flex flex-col gap-2">
              <h3 className="text-2xl font-bold">{speaker.name}</h3>
              <div>
                <Markdown>
                  {speaker.type === "speaker" ? speaker.bio : speaker.prText}
                </Markdown>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </PageContainer>
  );
}

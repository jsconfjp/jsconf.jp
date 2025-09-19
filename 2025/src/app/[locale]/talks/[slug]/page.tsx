import { Metadata } from "next";
import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Chip } from "@/components/Chip";
import { Markdown } from "@/components/Markdown";
import { PageContainer } from "@/components/PageContainer";
import { TalkSlug } from "@/constants/talks";
import { Locale, LOCALES } from "@/i18n/constants";
import { findTalkSession } from "@/lib/findTalkSession";
import { getTalkSessions } from "@/lib/getTalkSessions";

type Params = { locale: Locale; slug: string };

type Props = {
  params: Promise<Params>;
};

export function generateStaticParams(): Params[] {
  const talkSessions = getTalkSessions();

  return talkSessions.flatMap((session) =>
    LOCALES.map((locale) => ({
      locale,
      slug: session.talk.slug,
    }))
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const session = findTalkSession(slug as unknown as TalkSlug);

  return {
    title: session.talk.title,
    description: session.talk.description,
  };
}

export default async function Page({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({
    locale: locale,
    namespace: "talks",
  });
  const session = findTalkSession(slug as unknown as TalkSlug);

  return (
    <PageContainer title={session.talk.title} centerizeTitle={false}>
      <div>
        <time>
          {session.startTime}-{session.endTime}
        </time>
        <p className="my-1 flex items-center gap-2">
          <Chip>{t(`kind.${session.talk.kind}`)}</Chip>
          {session.track !== "all" && (
            <Chip track={session.track}>{t(`track.${session.track}`)}</Chip>
          )}
          <Chip>{session.talk.language}</Chip>
        </p>
      </div>
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
                className={
                  speaker.type === "speaker" ? "object-cover" : "object-contain"
                }
                src={
                  speaker.type === "speaker"
                    ? speaker.avatarUrl
                    : speaker.logoUrl
                }
                alt={`${speaker.name}'s avatar`}
                fill
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

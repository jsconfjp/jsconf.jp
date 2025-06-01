import { Chip } from "@/components/Chip";
import { Markdown } from "@/components/Markdown";
import { TALKS } from "@/constants/talks";
import { Locale, LOCALES } from "@/i18n/constants";
import { Metadata } from "next";
import { useTranslations } from "next-intl";
// import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import Image from "next/image";
import { use } from "react";

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export function generateStaticParams() {
  return TALKS.flatMap((talk) =>
    LOCALES.map((locale) => ({
      locale,
      slug: talk.slug,
    }))
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  setRequestLocale(locale as Locale);

  const talk = TALKS.find((talk) => talk.slug === slug);
  if (!talk) {
    throw new Error(`talk not found: ${slug}`);
  }

  return {
    title: talk.title,
    description: talk.description,
  };
}

export default function Page({ params }: Props) {
  const { locale, slug } = use(params);
  setRequestLocale(locale as Locale);

  const t = useTranslations("talks");

  const talk = TALKS.find((talk) => talk.slug === slug);
  if (!talk) {
    throw new Error(`talk not found: ${slug}`);
  }

  return (
    <div className="max-w-screen-lg mx-auto px-4 lg:px-0 pt-16 md:pt-32 flex flex-col">
      <p>{t(`kind.${talk.kind}`)}</p>
      <h1 className="my-1 text-3xl font-bold">{talk.title}</h1>
      <p className="my-2 flex items-center gap-2">
        <time>
          {talk.startTime}-{talk.endTime}
        </time>
        <Chip track={talk.track}>{t(`track.${talk.track}`)}</Chip>
        <Chip>{talk.language}</Chip>
      </p>
      <div className="mt-4">
        <Markdown>{talk.description}</Markdown>
      </div>
      <ul className="mt-8 flex flex-col gap-2">
        {talk.speakers.map((speaker) => (
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
    </div>
  );
}

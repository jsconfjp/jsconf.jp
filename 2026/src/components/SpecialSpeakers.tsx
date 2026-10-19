import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { FlattenedSpeaker } from "@/constants/talks";
import { Link } from "@/i18n/navigation";
import { getTalkTitle } from "@/lib/getTalkTitle";
import { Chip } from "./Chip";

type Props = {
  speakers: FlattenedSpeaker[];
};

export function SpecialSpeakers({ speakers }: Props) {
  const locale = useLocale();
  const tKind = useTranslations("talks.kind");

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {speakers.map(({ speaker, talk }) => (
        <Link
          key={speaker.name}
          href={`/talks/${talk.slug}`}
          className="flex flex-col gap-3 p-3 border bg-white border-dimmed hover:shadow-md transition-all duration-100"
        >
          <div className="relative aspect-square">
            {speaker.type === "speaker" ? (
              <Image src={speaker.avatarUrl} alt={`${speaker.name}'s avatar`} fill className="object-cover" />
            ) : speaker.logoUrl ? (
              <Image src={speaker.logoUrl} alt={`${speaker.name}'s avatar`} fill className="object-cover" />
            ) : (
              <div className="flex h-full items-center justify-center text-center font-semibold">{speaker.name}</div>
            )}
          </div>
          <div className="flex flex-col gap-2 items-center text-center pb-2">
            <Chip size="sm">{tKind(talk.kind)}</Chip>
            <h3 className="text-xl font-bold">{speaker.name}</h3>
            <p className="text-sm text-slate-600">{getTalkTitle(talk, locale)}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

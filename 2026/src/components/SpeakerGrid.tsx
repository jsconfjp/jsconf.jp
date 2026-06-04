import Image from "next/image";
import React from "react";
import { FlattenedSpeaker } from "@/constants/talks";
import { Link } from "@/i18n/navigation";

type Props = {
  speakers: FlattenedSpeaker[];
};

export function SpeakerGrid({ speakers }: Props) {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {speakers.map(({ speaker, talk }) => (
          <Link
            key={speaker.name}
            href={`/talks/${talk.slug}`}
            className="flex flex-col gap-2 p-2 border-1 bg-white border-dimmed hover:shadow-sm transition-all duration-100"
          >
            <div className="relative flex-1 flex aspect-square">
              <Image
                src={
                  speaker.type === "speaker"
                    ? speaker.avatarUrl
                    : speaker.logoUrl
                }
                alt={`${speaker.name}'s avatar`}
                fill
                className="object-cover"
              />
            </div>
            <h2 className="text-center py-2 text-md">{speaker.name}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
}

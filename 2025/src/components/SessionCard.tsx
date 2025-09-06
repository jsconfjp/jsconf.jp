import clsx from "clsx";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { ScheduledSession } from "@/constants/schedule";
import { Chip } from "./Chip";

const getSessionColor = (session: ScheduledSession) => {
  switch (session.kind) {
    case "talk":
      return session.track === "A"
        ? "bg-track-a/50 border-track-a"
        : session.track === "B"
        ? "bg-track-b/50 border-track-b"
        : session.track === "C"
        ? "bg-track-c/50 border-track-c"
        : session.track === "D"
        ? "bg-track-d/50 border-track-d"
        : "";
    case "reception":
      return "bg-slate-100/80 border-slate-400";
    case "opening":
    case "closing":
    case "networking":
      return "bg-trinidad-200 border-trinidad-300";
    case "break":
    case "closed":
      return "bg-slate-100/80 border-slate-400 border-dashed";
  }
};

export function SessionCard({ session }: { session: ScheduledSession }) {
  const t = useTranslations("schedule.kind");
  const tKind = useTranslations("talks.kind");
  const tTrack = useTranslations("talks.track");

  return (
    <div
      className={clsx(
        "py-2 px-4 rounded-sm border-2 h-full flex flex-col gap-1 justify-start text-wrap",
        getSessionColor(session),
        session.kind === "talk"
          ? "cursor-pointer hover:shadow-md"
          : "cursor-auto"
      )}
    >
      {session.kind === "talk" ? (
        <div className="flex flex-col gap-1 items-start">
          <div className="flex gap-1">
            {session.track !== "all" && (
              <div className="visible md:hidden">
                <Chip size="sm" track={session.track}>
                  {tTrack(session.track)}
                </Chip>
              </div>
            )}
            <Chip size="sm" track={session.track}>
              {tKind(session.talk.kind)}
            </Chip>
            <Chip size="sm">{session.talk.language}</Chip>
          </div>
          <div className="font-bold text-md">{session.talk.title}</div>
          <ul className="flex flex-col gap-1">
            {session.talk.speakers.map((speaker) => (
              <li key={speaker.name} className="flex items-center gap-2">
                <div className="aspect-square w-6 h-6 relative">
                  <Image
                    src={
                      speaker.type === "speaker"
                        ? speaker.avatarUrl
                        : speaker.logoUrl
                    }
                    alt={`${speaker.name}'s avatar`}
                    fill
                    objectFit="cover"
                    className="rounded-full"
                  />
                </div>
                <span>{speaker.name}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="flex flex-col gap-1 items-start">
          <div className="flex gap-1">
            {session.track !== "all" && (
              <div className="visible md:hidden">
                <Chip size="sm" track={session.track}>
                  {tTrack(session.track)}
                </Chip>
              </div>
            )}
          </div>
          <div>{t(session.kind)}</div>
        </div>
      )}
      <time className="text-xs">
        {session.startTime} - {session.endTime}
      </time>
    </div>
  );
}

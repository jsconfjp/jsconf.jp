import { SCHEDULE, ScheduledSession, TRACKS } from "@/constants/schedule";
import { SessionCard } from "@/components/SessionCard";
import { timeToMinutes } from "@/lib/utils";
import { useMemo } from "react";
import { useTranslations } from "next-intl";
import { TalkSessionCard } from "./TalkSessionCard";
import clsx from "clsx";

function toSessionId(session: ScheduledSession) {
  return session.track === "all"
    ? `session-${session.kind}-${timeToMinutes(session.startTime)}`
    : `session-${session.track}-${timeToMinutes(session.startTime)}`;
}

export function TimeTable() {
  const t = useTranslations("talks.track");

  // 5分単位のタイムスロットを生成
  const timeSlots = useMemo(() => {
    const allTimes = SCHEDULE.flatMap((session) => [
      timeToMinutes(session.startTime),
      timeToMinutes(session.endTime),
    ]);
    const startMinutes = Math.min(...allTimes);
    const endMinutes = Math.max(...allTimes);

    const slots = [];
    for (let time = startMinutes; time < endMinutes; time += 5) {
      slots.push(time);
    }
    return slots;
  }, []);
  // 各タイムスロットでのセッション配置を計算
  const gridTemplateAreas = useMemo(() => {
    return timeSlots
      .map((slotTime) => {
        const areas = ["", "", "", ""]; // A, B, C, D

        SCHEDULE.forEach((session) => {
          const sessionStart = timeToMinutes(session.startTime);
          const sessionEnd = timeToMinutes(session.endTime);

          if (sessionStart <= slotTime && slotTime < sessionEnd) {
            if (session.track === "all") {
              const sessionId = toSessionId(session);
              areas[0] = areas[1] = areas[2] = areas[3] = sessionId;
            } else {
              const trackIndex = TRACKS.indexOf(session.track);
              if (trackIndex === -1) {
                throw new Error("trackIndex must not be -1");
              }
              areas[trackIndex] = toSessionId(session);
            }
          }
        });

        return areas.join(" ");
      })
      .map((area) => `"${area}"`)
      .join("\n");
  }, [timeSlots]);

  return (
    <div>
      <div className="tracks-header sticky top-0 z-10">
        <div className="hidden md:flex gap-4 py-2">
          {TRACKS.map((track) => (
            <div
              key={track}
              className="flex-1 flex gap-2 items-center justify-center font-bold text-lg"
            >
              <div
                className={clsx(
                  "w-6 h-6 rounded-full",
                  `bg-track-${track.toLowerCase()}`
                )}
              />
              {t(track)}
            </div>
          ))}
        </div>
      </div>

      <div
        className="flex flex-col gap-2 md:grid md:gap-2"
        style={{
          gridTemplateColumns: "1fr 1fr 1fr 1fr",
          gridTemplateRows: `repeat(${timeSlots.length}, min-content)`,
          gridTemplateAreas: gridTemplateAreas,
        }}
      >
        {SCHEDULE.map((session) => (
          <div
            key={toSessionId(session)}
            style={{ gridArea: toSessionId(session) }}
          >
            {session.kind === "talk" ? (
              <TalkSessionCard session={session} />
            ) : (
              <SessionCard session={session} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

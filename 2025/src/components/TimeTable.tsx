import clsx from "clsx";
import { useTranslations } from "next-intl";
import { useMemo } from "react";
import { SessionCard } from "@/components/SessionCard";
import { SCHEDULE, TRACKS } from "@/constants/schedule";
import { generateSessionId } from "@/lib/generateSessionId";
import { generateTimeSlots } from "@/lib/generateTimeSlots";
import { getTrackClassNames } from "@/lib/getTrackClassNames";
import { timeToMinutes } from "@/lib/timeToMinutes";
import { TalkSessionCard } from "./TalkSessionCard";


type Props = {
  locale: string;
};

export function TimeTable({ locale }: Props) {
  const t = useTranslations("talks.track");

  // 5分単位のタイムスロットを生成
  const timeSlots = useMemo(() => {
    return generateTimeSlots(SCHEDULE);
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
              const sessionId = generateSessionId(session);
              areas[0] = areas[1] = areas[2] = areas[3] = sessionId;
            } else {
              const trackIndex = TRACKS.indexOf(session.track);
              if (trackIndex === -1) {
                throw new Error("trackIndex must not be -1");
              }
              areas[trackIndex] = generateSessionId(session);
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
                  getTrackClassNames(track),
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
            key={generateSessionId(session)}
            style={{ gridArea: generateSessionId(session) }}
          >
            {session.kind === "talk" ? (
              <TalkSessionCard session={session} locale={locale} />
            ) : (
              <SessionCard session={session} locale={locale} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

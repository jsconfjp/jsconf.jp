import { SCHEDULE, ScheduledSession } from "@/constants/schedule";
import { SessionCard } from "@/components/SessionCard";
import { timeToMinutes } from "@/lib/utils";
import { useMemo } from "react";
import { useTranslations } from "next-intl";

function DesktopSchedule() {
  const tTalks = useTranslations("talks.track");

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
  const gridAreas = useMemo(() => {
    return timeSlots.map((slotTime) => {
      const areas = ["", "", "", ""]; // A, B, C, D

      SCHEDULE.forEach((session) => {
        const sessionStart = timeToMinutes(session.startTime);
        const sessionEnd = timeToMinutes(session.endTime);

        // このタイムスロットがセッションの範囲内か
        if (sessionStart <= slotTime && slotTime < sessionEnd) {
          if (session.track === "all") {
            // 全トラック共通
            const sessionId = `session-${session.kind}-${sessionStart}`;
            areas[0] = areas[1] = areas[2] = areas[3] = sessionId;
          } else {
            // 個別トラック
            const trackIndex = ["A", "B", "C", "D"].indexOf(
              session.track as string
            );
            if (trackIndex !== -1) {
              const sessionId = `session-${session.track}-${sessionStart}`;
              areas[trackIndex] = sessionId;
            }
          }
        }
      });

      // 空きスロットを埋める
      return areas
        .map(
          (area, index) =>
            area || `empty-${slotTime}-${String.fromCharCode(65 + index)}`
        )
        .join(" ");
    });
  }, [timeSlots]);

  // ユニークなセッションリストを作成
  const uniqueSessions = useMemo(() => {
    const sessionMap = new Map<string, ScheduledSession>();

    SCHEDULE.forEach((session) => {
      const sessionStart = timeToMinutes(session.startTime);
      if (session.track === "all") {
        const sessionId = `session-${session.kind}-${sessionStart}`;
        sessionMap.set(sessionId, session);
      } else {
        const sessionId = `session-${session.track}-${sessionStart}`;
        sessionMap.set(sessionId, session);
      }
    });

    return sessionMap;
  }, []);

  const gridTemplateAreas = gridAreas.map((area) => `"${area}"`).join("\n");

  return (
    <div className="space-y-4">
      <div className="tracks-header sticky top-0 z-10">
        <div className="flex gap-4 py-2">
          {(["A", "B", "C", "D"] as const).map((track) => (
            <div key={track} className="flex-1 font-bold text-lg text-center">
              {tTalks(track)}
            </div>
          ))}
        </div>
      </div>

      <div
        className="grid gap-2"
        style={{
          gridTemplateColumns: "1fr 1fr 1fr 1fr",
          gridTemplateRows: `repeat(${timeSlots.length}, min-content)`,
          gridTemplateAreas: gridTemplateAreas,
        }}
      >
        {Array.from(uniqueSessions.entries()).map(([sessionId, session]) => (
          <div key={sessionId} style={{ gridArea: sessionId }}>
            <SessionCard session={session} />
          </div>
        ))}
      </div>
    </div>
  );
}

export function TimeTable() {
  // Gridレイアウト以外（モバイル）でも動作するため：時間順、トラック順でソート
  const sortedSessions = useMemo(() => {
    return [...SCHEDULE].sort((a, b) => {
      const timeCompare =
        timeToMinutes(a.startTime) - timeToMinutes(b.startTime);
      if (timeCompare !== 0) return timeCompare;

      // 時間が同じ場合はトラックでソート（all < A < B < C < D）
      const trackOrder = { all: 0, A: 1, B: 2, C: 3, D: 4 };
      return (
        trackOrder[a.track as keyof typeof trackOrder] -
        trackOrder[b.track as keyof typeof trackOrder]
      );
    });
  }, []);

  return (
    <>
      <div className="hidden md:block">
        <DesktopSchedule />
      </div>

      <div className="block md:hidden space-y-4">
        {sortedSessions.map((session, index) => (
          <div key={`${session.startTime}-${session.track}-${index}`}>
            <SessionCard session={session} />
          </div>
        ))}
      </div>
    </>
  );
}

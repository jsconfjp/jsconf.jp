"use client";

import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { getRemaining, loadTemporal, Remaining } from "@/lib/ticketCountdown";

type State = { status: "loading" } | { status: "counting"; remaining: Remaining } | { status: "open" };

const pad = (n: number) => n.toString().padStart(2, "0");

export function TicketCountdown() {
  const t = useTranslations("about.ticketNotice.countdown");
  const [state, setState] = useState<State>({ status: "loading" });

  useEffect(() => {
    let timer: ReturnType<typeof setInterval> | undefined;
    let cancelled = false;

    loadTemporal().then((T) => {
      if (cancelled) return;
      const tick = () => {
        const remaining = getRemaining(T, T.Now.zonedDateTimeISO("Asia/Tokyo"));
        if (remaining === null) {
          setState({ status: "open" });
          if (timer) clearInterval(timer);
          return;
        }
        setState({ status: "counting", remaining });
      };
      tick();
      timer = setInterval(tick, 1000);
    });

    return () => {
      cancelled = true;
      if (timer) clearInterval(timer);
    };
  }, []);

  // ビルド時（SSG）と初回描画では時刻が確定しないため、内容を固定して hydration mismatch を避ける
  if (state.status === "loading") {
    return <p className="mt-2 text-sm text-dimmed" aria-live="polite" />;
  }

  if (state.status === "open") {
    return (
      <p className="mt-2 text-base font-bold" aria-live="polite">
        {t("open")}
      </p>
    );
  }

  const { days, hours, minutes, seconds } = state.remaining;
  return (
    <p className="mt-2 flex flex-wrap items-baseline justify-center gap-x-2" aria-live="polite">
      <span className="text-sm">{t("label")}</span>
      <time className="font-mono text-2xl font-bold tabular-nums md:text-3xl">
        {t("days", { count: days })} {pad(hours)}:{pad(minutes)}:{pad(seconds)}
      </time>
    </p>
  );
}

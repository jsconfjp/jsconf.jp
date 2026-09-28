import type { Temporal } from "temporal-polyfill";

export type TemporalApi = typeof Temporal;

// チケット販売開始日時（JST）
export const TICKET_OPEN = {
  timeZone: "Asia/Tokyo",
  year: 2026,
  month: 10,
  day: 1,
  hour: 0,
  minute: 0,
  second: 0,
} as const;

export type Remaining = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

/**
 * ネイティブの Temporal があればそれを、無ければ polyfill を返す。
 * Chrome 144+ / Firefox 139+ はネイティブ実装を持つため polyfill の読み込みを省略できる。
 */
export async function loadTemporal(): Promise<TemporalApi> {
  const g = globalThis as { Temporal?: TemporalApi };
  if (g.Temporal) return g.Temporal;
  const mod = await import("temporal-polyfill");
  return mod.Temporal;
}

/**
 * 販売開始までの残り時間を返す。開始済みなら null。
 */
export function getRemaining(T: TemporalApi, now: Temporal.ZonedDateTime): Remaining | null {
  const target = T.ZonedDateTime.from(TICKET_OPEN);
  // 日単位の差分は同一タイムゾーン同士でしか計算できないため、比較側を JST に揃える
  const nowJst = now.withTimeZone(TICKET_OPEN.timeZone);
  if (T.ZonedDateTime.compare(nowJst, target) >= 0) return null;
  const d = nowJst.until(target, { largestUnit: "day", smallestUnit: "second" });
  return { days: d.days, hours: d.hours, minutes: d.minutes, seconds: d.seconds };
}

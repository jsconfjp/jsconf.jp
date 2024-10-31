import { useEffect, useMemo, useState } from "react"
import { Temporal } from "@js-temporal/polyfill"

function toInstant(
  target: Date | string | number | Temporal.Instant,
): Temporal.Instant {
  if (typeof target === "string") {
    target = new Date(target)
  }
  if (target instanceof Date) {
    target = target.getTime()
  }
  if (typeof target === "number") {
    return Temporal.Instant.fromEpochMilliseconds(target)
  }
  return target
}

export function useCountdown(
  target: Date | string | number | Temporal.Instant,
  round?: Temporal.DurationRoundTo,
  refreshEveryMs = 500,
) {
  const then = useMemo(() => toInstant(target), [target])
  const [duration, setDuration] = useState(() =>
    Temporal.Now.instant().until(then),
  )
  useEffect(() => {
    const int = setInterval(() => {
      const now = Temporal.Now.instant()
      setDuration(now.until(then))
    }, 500)
    return () => clearInterval(int)
  }, [then, refreshEveryMs])
  return useMemo(
    () => (round ? duration.round(round) : duration),
    [duration, round],
  )
}

const zeroFill = (num: number, digits: number) =>
  String(num).padStart(digits, "0")

/**
 * @example `rangeTimeBoxes(15, 10, 19.5) // 10:00から19:30まで15分おきの時刻を生成`
 */
export const rangeTimeBoxes = (
  everyMinutes: number,
  startHours: number,
  endHours: number
) => {
  const timeboxes = []
  for (
    let hour = startHours * 60;
    hour <= endHours * 60;
    hour += everyMinutes
  ) {
    const h = Math.floor(hour / 60)
    const m = hour % 60
    timeboxes.push(`${zeroFill(h, 2)}:${zeroFill(m, 2)}`)
  }
  return timeboxes
}

export const escapeTime = (time: string) => time.replace(":", "-")

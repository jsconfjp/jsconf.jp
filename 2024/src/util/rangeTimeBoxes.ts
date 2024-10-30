const zeroFill = (num: number, digits: number) =>
  String(num).padStart(digits, "0")

/**
 * @example `rangeTimeBoxes(15, 10, 19.5) // 10:00から19:30まで15分おきの時刻を生成`
 */
export const rangeTimeBoxes = (
  everyMinutes: number,
  startHours: number,
  endHours: number,
  startMinutes: number = 0,
  endMinutes: number = 0,
) => {
  const timeboxes = []
  const end = endHours * 60 + endMinutes
  for (
    let time = startHours * 60 + startMinutes;
    time <= end;
    time += everyMinutes
  ) {
    const h = Math.floor(time / 60)
    const m = time % 60
    timeboxes.push(`${zeroFill(h, 2)}:${zeroFill(m, 2)}`)
  }
  return timeboxes
}

export const escapeTime = (time: string) => time.replace(":", "-")

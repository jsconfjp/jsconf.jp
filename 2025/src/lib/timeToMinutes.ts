/**
 * Converts time string in HH:mm format to total minutes since 00:00
 * Used for session ID generation and time-based calculations
 */
export function timeToMinutes(time: string): number {
  const parts = time.split(":");
  if (parts.length !== 2) {
    throw new Error(`Invalid time format: ${time}`);
  }

  const [hoursStr, minutesStr] = parts;
  if (!hoursStr || !minutesStr) {
    throw new Error(`Invalid time format: ${time}`);
  }

  const hours = Number(hoursStr);
  const minutes = Number(minutesStr);
  if (isNaN(hours) || isNaN(minutes)) {
    throw new Error(`Invalid time format: ${time}`);
  }

  return hours * 60 + minutes;
}

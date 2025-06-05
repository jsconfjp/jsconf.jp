/**
 * Converts time string in "HH:mm" format to minutes since midnight.
 * Used for time calculations and comparisons in scheduling logic.
 * For example, "10:30" becomes 630 minutes (10*60 + 30).
 * Throws an error for invalid time formats since all data is static.
 */
export function timeToMinutes(time: string): number {
  if (!time || typeof time !== "string") {
    throw new Error(`Invalid time format: ${time}`);
  }

  const parts = time.split(":");
  if (parts.length !== 2) {
    throw new Error(`Invalid time format: ${time}. Expected HH:mm format.`);
  }

  const [hoursStr, minutesStr] = parts;

  if (!hoursStr || !minutesStr) {
    throw new Error(
      `Invalid time format: ${time}. Both hours and minutes must be provided.`
    );
  }

  const [hours, minutes] = [Number(hoursStr), Number(minutesStr)];

  if (isNaN(hours) || isNaN(minutes)) {
    throw new Error(
      `Invalid time format: ${time}. Hours and minutes must be numbers.`
    );
  }

  if (hours < 0 || hours > 23 || minutes < 0 || minutes > 59) {
    throw new Error(
      `Invalid time format: ${time}. Hours must be 0-23, minutes must be 0-59.`
    );
  }

  return hours * 60 + minutes;
}

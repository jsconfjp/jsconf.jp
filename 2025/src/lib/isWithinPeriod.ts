/**
 * Checks if a given date is within a specified time period.
 * Returns true if the current date is between the start and end dates (inclusive).
 * If no end date is provided, only checks if current is after or equal to start.
 * Used for filtering announcements and other time-sensitive content.
 */
export function isWithinPeriod(
  current: Date,
  from: Date,
  until?: Date
): boolean {
  if (!(current instanceof Date) || isNaN(current.getTime())) {
    throw new Error("Invalid current date provided");
  }

  if (!(from instanceof Date) || isNaN(from.getTime())) {
    throw new Error("Invalid from date provided");
  }

  if (until && (!(until instanceof Date) || isNaN(until.getTime()))) {
    throw new Error("Invalid until date provided");
  }

  if (until && from >= until) {
    throw new Error("From date must be before until date");
  }

  return current >= from && (!until || current <= until);
}

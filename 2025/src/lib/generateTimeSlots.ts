import { SCHEDULE, ScheduledSession } from "@/constants/schedule";
import { timeToMinutes } from "./timeToMinutes";

/** Time slot interval in minutes for timetable grid layout */
export const TIME_SLOT_INTERVAL_MINUTES = 5;

/**
 * Generates time slots covering the entire schedule duration.
 * Calculates the minimum and maximum times from all sessions and creates
 * an array of time slots in regular increments. Used for timetable grid layout
 * to ensure consistent spacing and alignment of sessions.
 */
export function generateTimeSlots(
  sessions: ScheduledSession[] = SCHEDULE
): number[] {
  if (!sessions || sessions.length === 0) {
    throw new Error("Sessions array cannot be empty for time slot generation");
  }

  const allTimes = sessions.flatMap((session) => [
    timeToMinutes(session.startTime),
    timeToMinutes(session.endTime),
  ]);

  if (allTimes.length === 0) {
    throw new Error("No valid times found in sessions");
  }

  const startMinutes = Math.min(...allTimes);
  const endMinutes = Math.max(...allTimes);

  if (startMinutes >= endMinutes) {
    throw new Error("Invalid time range: start time must be before end time");
  }

  const slots = [];
  for (
    let time = startMinutes;
    time < endMinutes;
    time += TIME_SLOT_INTERVAL_MINUTES
  ) {
    slots.push(time);
  }
  return slots;
}

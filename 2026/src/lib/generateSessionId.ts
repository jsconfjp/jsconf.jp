import { ScheduledSession } from "@/constants/schedule";
import { timeToMinutes } from "./timeToMinutes";

/**
 * Generates a unique ID for a session.
 * For sessions with track "all", generates "session-{kind}-{startTimeInMinutes}" format.
 * For specific track sessions, generates "session-{track}-{startTimeInMinutes}" format.
 * Used for element identification in timetable grid layouts and other UI components.
 */
export function generateSessionId(session: ScheduledSession): string {
  return session.track === "all"
    ? `session-${session.kind}-${timeToMinutes(session.startTime)}`
    : `session-${session.track}-${timeToMinutes(session.startTime)}`;
}

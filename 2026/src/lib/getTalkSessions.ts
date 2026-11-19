import { SCHEDULE, ScheduledSession } from "@/constants/schedule";

/**
 * Filters and returns only talk sessions from the given list of sessions.
 * Excludes other session types like breaks, openings, closings, etc.
 * Used to get a clean list of actual talk sessions for speakers page and other components.
 */
export function getTalkSessions(sessions: ScheduledSession[] = SCHEDULE) {
  return sessions.filter((session) => session.kind === "talk");
}

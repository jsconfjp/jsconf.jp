import { SCHEDULE, ScheduledSession } from "@/constants/schedule";

type TalkSession = Extract<ScheduledSession, { kind: "talk" }>;

/**
 * Finds a talk session by its slug.
 * Searches through the given list of sessions and returns the talk session
 * that matches the specified slug. Throws an error if no matching session is found
 * since all data is static and should be consistent.
 */
export function findTalkSession(
  slug: string,
  sessions: ScheduledSession[] = SCHEDULE
): TalkSession {
  const session = sessions.find(
    (s) => s.kind === "talk" && s.talk.slug === slug
  );
  if (!session) {
    throw new Error(`Talk session not found for slug: ${slug}`);
  }
  return session as TalkSession;
}

import { SCHEDULE, ScheduledSession, TalkSession } from "@/constants/schedule";
import { TALKS } from "@/constants/talks";

type TalkSlug = (typeof TALKS)[number]["slug"];
type ExtractTalkSlug<T extends readonly ScheduledSession[]> = Extract<
  T[number],
  { kind: "talk" }
>["talk"]["slug"];

// Finds a talk session by its slug (recommended for production use)
export function findTalkSession(slug: TalkSlug): TalkSession;

// For testing only: finds a talk session from custom sessions array
export function findTalkSession<T extends readonly ScheduledSession[]>(
  slug: ExtractTalkSlug<T>,
  sessions: T
): TalkSession;
// Implementation: handles both overloads with loose string typing
export function findTalkSession(
  slug: string,
  sessions: readonly ScheduledSession[] = SCHEDULE
): TalkSession {
  const session = sessions.find(
    (s) => s.kind === "talk" && s.talk.slug === slug
  );
  if (!session) {
    throw new Error(`Talk session not found for slug: ${slug}`);
  }
  if (session.kind !== "talk") {
    throw new Error(`Session found but not a talk session for slug: ${slug}`);
  }
  return session;
}

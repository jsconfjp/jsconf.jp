import { ScheduledSession } from "@/constants/schedule";
import { SessionCard } from "./SessionCard";
import { Link } from "@/i18n/navigation";

export function TalkSessionCard({
  session,
}: {
  session: Extract<ScheduledSession, { kind: "talk" }>;
}) {
  if (session.kind !== "talk") {
    throw new RangeError("session is not a talk");
  }

  return (
    <Link href={`/talks/${session.talk.slug}`}>
      <SessionCard session={session} />
    </Link>
  );
}

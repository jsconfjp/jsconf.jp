import { ScheduledSession } from "@/constants/schedule";
import { Link } from "@/i18n/navigation";
import { SessionCard } from "./SessionCard";

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

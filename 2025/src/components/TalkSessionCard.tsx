import { ScheduledSession } from "@/constants/schedule";
import { Link } from "@/i18n/navigation";
import { SessionCard } from "./SessionCard";

export function TalkSessionCard({
  session,
  locale,
}: {
  session: Extract<ScheduledSession, { kind: "talk" }>,
  locale: string,
}) {
  if (session.kind !== "talk") {
    throw new RangeError("session is not a talk");
  }

  return (
    <Link href={`/talks/${session.talk.slug}`}>
      <SessionCard session={session} locale={locale} />
    </Link>
  );
}

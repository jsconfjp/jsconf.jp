import { ORGANIZING_TEAM, VOLUNTEER_TEAM } from "@/constants/team";
import { TeamMember } from "./TeamMember";
import { Button } from "./Button";
import { useTranslations } from "next-intl";

export function Team() {
  const t = useTranslations("team");

  return (
    <div>
      <h2 className="text-2xl font-bold my-4 text-center">
        {t("organizingTeam")}
      </h2>
      <ol className="flex flex-wrap gap-4 justify-center">
        {ORGANIZING_TEAM.map((member) => (
          <li key={member.name} className="hover:underline cursor-pointer">
            <TeamMember member={member} size={160} />
          </li>
        ))}
      </ol>

      <h2 className="text-2xl font-bold my-4 text-center">
        {t("volunteerTeam")}
      </h2>
      <ol className="flex flex-wrap gap-4 justify-center">
        {VOLUNTEER_TEAM.map((member) => (
          <li key={member.name} className="hover:underline cursor-pointer">
            <TeamMember member={member} size={120} />
          </li>
        ))}
      </ol>

      <div className="flex justify-center mt-8">
        <Button variant="secondary" href="https://nodejs.jp/" target="_blank">
          {t("joinUs")}
        </Button>
      </div>
    </div>
  );
}

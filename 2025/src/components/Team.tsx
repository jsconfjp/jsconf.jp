import { ORGANIZING_TEAM, VOLUNTEER_TEAM } from "@/constants/team";
import { TeamMember } from "./TeamMember";
import { Button } from "./Button";
import { useTranslations } from "next-intl";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

export function Team() {
  const t = useTranslations("team");

  return (
    <div>
      <h3 className="text-2xl font-bold my-2 text-center">
        {t("organizingTeam")}
      </h3>
      <div className="max-w-screen-sm mx-auto">
        <ol className="grid grid-cols-3 gap-4">
          {ORGANIZING_TEAM.map((member) => (
            <li
              key={member.name}
              className="items-center hover:underline cursor-pointer"
            >
              <TeamMember member={member} size={160} />
            </li>
          ))}
        </ol>
      </div>

      <h3 className="text-2xl font-bold my-2 text-center">
        {t("volunteerTeam")}
      </h3>
      <ol className="grid grid-cols-4 gap-4">
        {VOLUNTEER_TEAM.map((member) => (
          <li
            key={member.name}
            className="flex flex-col items-center hover:underline cursor-pointer"
          >
            <TeamMember member={member} size={120} />
          </li>
        ))}
      </ol>

      <div className="flex justify-center mt-8">
        <Button
          variant="secondary"
          href="https://nodejs.jp/"
          target="_blank"
          endIcon={<ArrowTopRightOnSquareIcon className="w-4 h-4" />}
        >
          {t("joinUs")}
        </Button>
      </div>
    </div>
  );
}

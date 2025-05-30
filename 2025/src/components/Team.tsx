import { ORGANIZING_TEAM, VOLUNTEER_TEAM } from "@/constants/team";
import { TeamMember } from "./TeamMember";
import Link from "next/link";

export function Team() {
  return (
    <div>
      <h2 className="text-2xl font-bold my-4 text-center">Organizing team</h2>
      <ol className="flex flex-wrap gap-4 justify-center">
        {ORGANIZING_TEAM.map((member) => (
          <li key={member.name} className="hover:underline cursor-pointer">
            <TeamMember member={member} size={160} />
          </li>
        ))}
      </ol>

      <h2 className="text-2xl font-bold my-4 text-center">Volunteer team</h2>
      <ol className="flex flex-wrap gap-4 justify-center">
        {VOLUNTEER_TEAM.map((member) => (
          <li key={member.name} className="hover:underline cursor-pointer">
            <TeamMember member={member} size={120} />
          </li>
        ))}
      </ol>

      <div className="flex justify-center mt-8">
        <Link
          href="https://nodejs.jp/"
          target="_blank"
          className="bg-secondary text-white px-4 py-2 rounded-lg font-medium hover:bg-secondary/90 transition-colors"
        >
          Join us
        </Link>
      </div>
    </div>
  );
}

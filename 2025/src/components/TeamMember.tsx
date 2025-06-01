import { TeamMember as TeamMemberType } from "@/constants/team";
import { Link } from "@/i18n/navigation";

type Props = {
  member: TeamMemberType;
  size: number;
};

export function TeamMember({ member, size }: Props) {
  return (
    <Link
      href={member.url}
      target="_blank"
      className="text-sm text-center flex flex-col items-center text-blue-600"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        loading="lazy"
        fetchPriority="low"
        src={member.avatarUrl}
        alt={`${member.name}'s avatar`}
        width={size}
        height={size}
        className="max-w-full"
      />
      {member.name}
    </Link>
  );
}

import Link from "next/link";
import { TeamMember as TeamMemberType } from "@/constants/team";

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
        src={member.avatarUrl}
        alt={member.name}
        width={size}
        height={size}
        className="max-w-full"
      />
      {member.name}
    </Link>
  );
}

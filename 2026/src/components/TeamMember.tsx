import { TeamMember as TeamMemberType } from "@/constants/team";
import { Link } from "@/i18n/navigation";

type Props = {
  member: TeamMemberType;
  size: number;
};

// Retina 対応のためレンダリングサイズの 2 倍をリクエストする
const PIXEL_DENSITY = 2;

// GitHub のアバターは `?size=` で原寸ではなくリサイズ後の画像を配信できる。
// GitHub 以外のホスト (Facebook CDN / Slack) はリサイズ非対応なのでそのまま返す。
function resolveAvatarUrl(avatarUrl: string, size: number): string {
  const url = new URL(avatarUrl);
  const isGitHub =
    url.hostname === "github.com" ||
    url.hostname.endsWith(".githubusercontent.com");
  if (!isGitHub) {
    return avatarUrl;
  }
  url.searchParams.set("size", String(size * PIXEL_DENSITY));
  return url.toString();
}

export function TeamMember({ member, size }: Props) {
  return (
    <Link
      href={member.url}
      target="_blank"
      className="text-center flex flex-col items-center gap-2"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        loading="lazy"
        fetchPriority="low"
        src={resolveAvatarUrl(member.avatarUrl, size)}
        alt={`${member.name}'s avatar`}
        width={size}
        height={size}
        className="max-w-full"
      />
      {member.name}
    </Link>
  );
}

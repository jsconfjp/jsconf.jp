import clsx from "clsx";
import Image from "next/image";
import { Sponsor } from "@/constants/sponsors";
import { Link } from "@/i18n/navigation";

type Props = {
  sponsor: Sponsor;
};

export function SponsorLogo({ sponsor }: Props) {
  return (
    <Link
      key={sponsor.name}
      href={sponsor.url}
      target="_blank"
      className={clsx(
        "flex items-center justify-center bg-white border-1 border-dimmed",
        sponsor.plan === "premium" && "min-h-52 p-10",
        sponsor.plan === "sponsor" && "min-h-32 p-5",
      )}
    >
      <div className="relative w-full h-full">
        <Image
          src={sponsor.logoUrl}
          alt={sponsor.name}
          fill
          className="object-contain"
        />
      </div>
    </Link>
  );
}

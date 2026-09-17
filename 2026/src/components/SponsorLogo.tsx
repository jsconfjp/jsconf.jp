import clsx from "clsx";
import Image from "next/image";
import { Sponsor } from "@/constants/sponsors";
import { Link } from "@/i18n/navigation";

type Props = {
  sponsor: Sponsor;
};

const SPONSOR_HEIGHT_MAP: Record<NonNullable<Sponsor["height"]>, string> = {
  "1/3": "33.333%",
};

export function SponsorLogo({ sponsor }: Props) {
  return (
    <Link
      key={sponsor.name}
      href={sponsor.url}
      target="_blank"
      className={clsx(
        "flex items-center justify-center border border-dimmed bg-white",
        sponsor.plan === "premium" && "h-52 p-10",
        sponsor.plan === "sponsor" && "h-32 p-5",
      )}
    >
      {sponsor.logoUrl ? (
        <div className="flex h-full w-full items-center justify-center">
          <div
            className="relative w-full"
            style={{
              height: sponsor.height
                ? SPONSOR_HEIGHT_MAP[sponsor.height]
                : "100%",
            }}
          >
            <Image
              src={sponsor.logoUrl}
              alt={sponsor.name}
              fill
              className="object-contain"
            />
          </div>
        </div>
      ) : (
        <span className="text-center text-xl font-semibold">
          {sponsor.name}
        </span>
      )}
    </Link>
  );
}

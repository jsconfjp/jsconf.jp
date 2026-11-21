import Image, { type StaticImageData } from "next/image";
import { useTranslations } from "next-intl";
import map2fEn from "@/../public/misc/venue-map-2f-en.png";
import map2fJa from "@/../public/misc/venue-map-2f-ja.png";
import map3fEn from "@/../public/misc/venue-map-3f-en.png";
import map3fJa from "@/../public/misc/venue-map-3f-ja.png";
import type { Locale } from "@/i18n/constants";

const FLOOR_GUIDES: Record<Locale, { floor: string; src: StaticImageData }[]> = {
  en: [
    { floor: "2F", src: map2fEn },
    { floor: "3F", src: map3fEn },
  ],
  ja: [
    { floor: "2F", src: map2fJa },
    { floor: "3F", src: map3fJa },
  ],
};

type Props = {
  locale: Locale;
};

export function VenueFloorGuide({ locale }: Props) {
  const t = useTranslations("venue");

  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-2xl font-bold text-center">{t("floorGuide")}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {FLOOR_GUIDES[locale].map(({ floor, src }) => (
          <a key={floor} href={src.src} target="_blank" rel="noopener noreferrer">
            <Image src={src} alt={t("floorGuideAlt", { floor })} className="w-full h-auto" />
          </a>
        ))}
      </div>
    </div>
  );
}

import { useTranslations } from "next-intl";
import { PLACE_ID } from "@/constants/venue";
import { GoogleMaps } from "./GoogleMaps";

type Props = {
  locale: string;
};

export function Venue({ locale }: Props) {
  const t = useTranslations("venue");

  return (
    <div className="h-96 flex flex-col gap-2">
      <h2 className="text-2xl font-bold text-center">{t("placeName")}</h2>
      <p className="text-center">{t("address")}</p>
      <GoogleMaps
        mapMode="place"
        params={{ q: `place_id:${PLACE_ID}`, language: locale }}
      />
    </div>
  );
}

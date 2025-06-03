type Props = {
  mapMode: "directions" | "place" | "search";
  params: {
    q?: string;
    language?: string;
  } & Record<string, string | number | boolean>;
};

/**
 * @see https://developers.google.com/maps/documentation/embed/embedding-map?hl=ja#place_mode
 */
export function GoogleMaps({ mapMode, params }: Props) {
  const url = new URL(`https://www.google.com/maps/embed/v1/${mapMode}`);
  url.searchParams.append("maptype", "roadmap");
  url.searchParams.append("language", params.language ?? "ja");
  url.searchParams.append("region", "jp");
  url.searchParams.append("key", process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!);
  Object.entries(params).forEach(([key, value]) => {
    url.searchParams.append(key, value.toString());
  });

  return (
    <iframe
      className="w-full h-full"
      referrerPolicy="no-referrer-when-downgrade"
      allowFullScreen
      loading="lazy"
      title="Google Maps"
      src={url.toString()}
    />
  );
}

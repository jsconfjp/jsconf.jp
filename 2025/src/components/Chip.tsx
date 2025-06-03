import { Track } from "@/constants/schedule";
import clsx from "clsx";
import React from "react";

type Props = {
  track?: Track;
  size?: "default" | "sm";
};

export function Chip({
  children,
  track,
  size = "default",
}: React.PropsWithChildren<Props>) {
  const backgroundColor =
    track && track !== "all"
      ? `var(--color-track-${track.toLowerCase()})`
      : "var(--color-secondary)";
  const getTextColor = (track?: Track) => {
    if (!track || track === "all") return "white";
    return track === "C" ? "black" : "white";
  };

  const color = getTextColor(track);

  return (
    <span
      className={clsx(
        "flex rounded-md font-bold",
        size === "default" ? "py-1 px-4 text-sm" : "py-0.5 px-2 text-xs"
      )}
      style={{ color, backgroundColor }}
    >
      {children}
    </span>
  );
}

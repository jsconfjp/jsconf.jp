import clsx from "clsx";
import React from "react";
import { Track } from "@/constants/schedule";

type Props = {
  track?: Track;
  size?: "default" | "sm";
};

export function Chip({
  children,
  track,
  size = "default",
}: React.PropsWithChildren<Props>) {
  return (
    <span
      className={clsx(
        "flex rounded-md font-bold",
        size === "default" ? "py-1 px-4 text-sm" : "py-0.5 px-2 text-xs",
        track && track !== "all"
          ? `bg-track-${track.toLowerCase()} text-track-${track.toLowerCase()}-surface`
          : "bg-secondary text-white"
      )}
    >
      {children}
    </span>
  );
}

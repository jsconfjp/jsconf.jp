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

  // テキスト色は動的に計算（背景色に応じて白か黒を選択）
  const getTextColor = (track?: Track) => {
    if (!track || track === "all") return "white";
    // 明るい背景色（C）は黒文字、それ以外は白文字
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

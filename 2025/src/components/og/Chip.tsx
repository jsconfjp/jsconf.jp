import React from "react";

type Props = {
  track?: "A" | "B" | "C" | "D";
};

const trackColors = {
  A: ["rgb(255, 87, 0)", "white"],
  B: ["rgb(54, 164, 156)", "white"],
  C: ["rgb(249, 215, 73)", ""],
  D: ["rgb(80, 158, 221)", "white"],
} as const;

export function Chip({ children, track }: React.PropsWithChildren<Props>) {
  const [backgroundColor, color] = track
    ? trackColors[track]
    : ["rgb(17 24 39)", "white"];

  return (
    <span
      tw={"flex text-lg py-1 px-2 rounded-md text-white"}
      style={{ color, backgroundColor }}
    >
      {children}
    </span>
  );
}

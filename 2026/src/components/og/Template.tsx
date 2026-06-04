import React, { PropsWithChildren } from "react";

export function Template({ children }: PropsWithChildren) {
  return (
    <div
      style={{
        fontFamily: "Noto Sans JP",
        // FIXME: global.cssに定義した独自の色が参照できないため多重定義
        backgroundImage:
          "linear-gradient(135deg, rgb(240, 100, 25) 0%, rgb(255, 107, 107) 50%, rgb(220, 90, 20) 100%)",
      }}
      tw="h-full w-full flex flex-col p-8"
    >
      <div tw="flex-1 flex flex-col rounded-xl bg-white shadow-md">
        {children}
      </div>
    </div>
  );
}

import React from "react";
import en from "@/../messages/en.json";
import { Logo } from "./Logo";
import { Template } from "./Template";

export function General() {
  return (
    <Template>
      <div tw="flex-1 flex flex-col rounded-xl bg-white shadow-md">
        <main tw="flex-1 px-16 flex flex-col items-center justify-center">
          <div tw="flex items-center" style={{ gap: 16 }}>
            <Logo size={80} />
            <h1 tw="text-8xl font-bold">{en.about.title}</h1>
          </div>
          <p tw="text-4xl font-bold">{en.about.eventDate}</p>
        </main>
      </div>
    </Template>
  );
}

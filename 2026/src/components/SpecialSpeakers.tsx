"use client";

import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { useSyncExternalStore } from "react";
import { Link } from "@/i18n/navigation";
import { getTalkTitle } from "@/lib/getTalkTitle";
import type { SpecialSpeakerCard } from "@/lib/getSpecialSpeakers";
import { Chip } from "./Chip";

type Props = {
  pinned: SpecialSpeakerCard[];
  pool: SpecialSpeakerCard[];
  randomCount: number;
};

// Fisher–Yates で先頭 count 件を選ぶ
const pickRandom = <T,>(items: readonly T[], count: number): T[] => {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j]!, copy[i]!];
  }
  return copy.slice(0, count);
};

const cardClassName = "flex flex-col gap-3 p-3 border bg-white border-dimmed";

// 静的サイトなので抽選はクライアントで行う。SSR/ハイドレーション時は null を返してズレを避け、
// その後に pool ごとに一度だけ抽選した結果を返す（useSyncExternalStore の getSnapshot は同じ参照を返す必要がある）。
const picks = new WeakMap<readonly SpecialSpeakerCard[], SpecialSpeakerCard[]>();
const subscribe = () => () => {};
const usePicked = (pool: SpecialSpeakerCard[], count: number) =>
  useSyncExternalStore(
    subscribe,
    () => {
      let picked = picks.get(pool);
      if (!picked) {
        picked = pickRandom(pool, count);
        picks.set(pool, picked);
      }
      return picked;
    },
    () => null,
  );

export function SpecialSpeakers({ pinned, pool, randomCount }: Props) {
  const locale = useLocale();
  const tKind = useTranslations("talks.kind");
  const picked = usePicked(pool, randomCount);

  const placeholders = Math.min(randomCount, pool.length);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {[...pinned, ...(picked ?? [])].map((card) => (
        <Link
          key={card.name}
          href={`/talks/${card.slug}`}
          className={`${cardClassName} hover:shadow-md transition-all duration-100`}
        >
          <div className="relative aspect-square">
            <Image src={card.avatarUrl} alt={`${card.name}'s avatar`} fill className="object-cover" />
          </div>
          <div className="flex flex-col gap-2 items-center text-center pb-2">
            <Chip size="sm">{tKind(card.kind)}</Chip>
            <h3 className="text-xl font-bold">{card.name}</h3>
            <p className="text-sm text-slate-600">{getTalkTitle(card, locale)}</p>
          </div>
        </Link>
      ))}
      {picked === null &&
        Array.from({ length: placeholders }, (_, i) => (
          <div key={i} className={`${cardClassName} animate-pulse`} aria-hidden="true">
            <div className="aspect-square bg-slate-100" />
            <div className="flex flex-col gap-2 items-center pb-2">
              <div className="h-5 w-16 rounded-md bg-slate-100" />
              <div className="h-6 w-32 rounded bg-slate-100" />
              <div className="h-4 w-40 rounded bg-slate-100" />
            </div>
          </div>
        ))}
    </div>
  );
}

import { PINNED_SPECIAL_SPEAKER_NAMES } from "@/constants/specialSpeakers";
import type { Talk } from "@/constants/talks";
import { flattenSpeakers } from "./flattenSpeakers";

// Client Component に渡す最小限のカード情報
export type SpecialSpeakerCard = {
  name: string;
  avatarUrl: Extract<Talk["speakers"][number], { type: "speaker" }>["avatarUrl"];
  slug: Talk["slug"];
  title: Talk["title"];
  titleJa?: Talk["titleJa"];
  kind: Talk["kind"];
};

export type SpecialSpeakers = {
  pinned: SpecialSpeakerCard[];
  pool: SpecialSpeakerCard[];
};

/**
 * pinned: PINNED_SPECIAL_SPEAKER_NAMES をその順で解決したもの。
 * pool: スポンサーと pinned を除いた登壇者（1人1枚。複数トークは最初のトークを採用）。
 */
export function getSpecialSpeakers(
  talks: readonly Talk[] = flattenSpeakers().map(({ talk }) => talk),
  pinnedNames: readonly string[] = PINNED_SPECIAL_SPEAKER_NAMES,
): SpecialSpeakers {
  const cards = new Map<string, SpecialSpeakerCard>();
  for (const talk of talks) {
    for (const speaker of talk.speakers) {
      if (speaker.type !== "speaker" || cards.has(speaker.name)) continue;
      cards.set(speaker.name, {
        name: speaker.name,
        avatarUrl: speaker.avatarUrl,
        slug: talk.slug,
        title: talk.title,
        titleJa: talk.titleJa,
        kind: talk.kind,
      });
    }
  }

  const pinned = pinnedNames.flatMap((name) => {
    const card = cards.get(name);
    return card ? [card] : [];
  });
  const pool = [...cards.values()].filter((card) => !pinnedNames.includes(card.name));
  return { pinned, pool };
}

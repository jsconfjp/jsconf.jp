import { SPECIAL_SPEAKER_NAMES } from "@/constants/specialSpeakers";
import type { FlattenedSpeaker } from "@/constants/talks";
import { flattenSpeakers } from "./flattenSpeakers";

/**
 * SPECIAL_SPEAKER_NAMES に挙げた登壇者を、その配列順で返す。
 * 複数トークを持つ登壇者は最初のトークのみ採用する。
 */
export function getSpecialSpeakers(names: readonly string[] = SPECIAL_SPEAKER_NAMES): FlattenedSpeaker[] {
  const all = flattenSpeakers();
  return names.flatMap((name) => {
    const found = all.find(({ speaker }) => speaker.type === "speaker" && speaker.name === name);
    return found ? [found] : [];
  });
}

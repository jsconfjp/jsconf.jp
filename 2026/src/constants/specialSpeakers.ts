// トップページの Special Speakers。
// PINNED は常に先頭に固定表示し、残り RANDOM_COUNT 枠はスポンサー以外の登壇者から表示のたびにランダムに選ぶ。
// 名前は speakerProfiles.json / TALKS のスピーカー名と完全一致させる（getSpecialSpeakers.test.ts で検証）。
export const PINNED_SPECIAL_SPEAKER_NAMES: readonly string[] = ["Brendan Eich", "Josh Junon"];
export const RANDOM_SPECIAL_SPEAKER_COUNT = 4;

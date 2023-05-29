import { en } from "./en"

type AvailableKeys = keyof (typeof en)["translation"]

export const ja: {
  translation: Partial<{ [K in AvailableKeys]: string }>
} = {
  translation: {
    speakers: "スピーカー",
    sponsors: "スポンサー",
    backToTop: "TOPへ戻る",
    festivalPeriod: "2022年11月26日開催",
    guestSpeakers: "ゲストスピーカー",
    goToGuests: "スピーカー一覧へ",
    tickets: "チケット",
    buyTickets: "参加登録",
    callForSpeakers: "トーク募集",
    submitTalk: "トーク申込みフォームへ",
    callForSponsors: "スポンサー募集",
    becomeASponsor: "スポンサー申込みフォームへ",
    schedule: "開催スケジュール",
    roomA: "トラックA",
    roomB: "トラックB",
    roomC: "トラックC",
    "jp-specified-commercial-transactions-act": "特定商取引法に基づく表示",
    "code-of-conduct": "行動規範",
    // @ts-expect-error It's not defined in en.ts
    Japanese: "日本語",
    English: "英語",
    openMobileMenu: "ナビゲーションを開く",
    closeMobileMenu: "ナビゲーションを閉じる",
    "jna-address": "〒210-0024 神奈川県川崎市川崎区日進町27-7-903",
  },
}

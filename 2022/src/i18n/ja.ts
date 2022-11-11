import { en } from "./en"

type AvailableKeys = keyof typeof en["translation"]

export const ja: {
  translation: Partial<{ [K in AvailableKeys]: string }>
} = {
  translation: {
    speakers: "スピーカー",
    sponsors: "スポンサー",
    backToTop: "TOPへ戻る",
    festivalPeriod: "2022年11月26日開催予定",
    guestSpeakers: "ゲストスピーカー",
    goToGuests: "スピーカー一覧へ",
    tickets: "チケット",
    buyTickets: "チケットを購入する",
    callForSpeakers: "トーク募集",
    submitTalk: "トーク申込みフォームへ",
    callForSponsors: "スポンサー募集",
    becomeASponsor: "スポンサー申込みフォームへ",
    schedule: "開催スケジュール (予定)",
    roomA: "トラックA",
    roomB: "トラックB",
    roomC: "トラックC",
    "jp-specified-commercial-transactions-act": "特定商取引法に基づく表示",
    "code-of-conduct": "行動規範",
    // @ts-ignore It's not defined in en.ts
    Japanese: "日本語",
    // @ts-ignore It's not defined in en.ts
    English: "英語",
    openMobileMenu: "ナビゲーションを開く",
    closeMobileMenu: "ナビゲーションを閉じる",
    "jna-address": "〒210-0024 神奈川県川崎市川崎区日進町27-7-903"
  }
}

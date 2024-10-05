import { en } from "./en"

type AvailableKeys = keyof (typeof en)["translation"]

export const ja: {
  translation: Partial<{ [K in AvailableKeys]: string }>
} = {
  translation: {
    speakers: "スピーカー",
    sponsors: "スポンサー",
    backToTop: "TOPへ戻る",
    festivalPeriod: "2024/11/23",
    guestSpeakers: "ゲストスピーカー",
    goToGuests: "スピーカー一覧へ",
    tickets: "チケット",
    buyTickets: "参加登録",
    callForSpeakers: "トーク募集",
    submitTalk: "トーク申込みフォームへ",
    callForSponsors: "スポンサー募集",
    becomeASponsor: "スポンサー申込みフォームへ",
    schedule: "開催スケジュール",
    slides: "スライド",
    roomA: "トラックA（7F パーティスペース）",
    roomB: "トラックB（3F 301 発表スペース）",
    roomC: "トラックC（3F 302 発表スペース）",
    roomD: "トラックD（2F 発表スペース）",
    "lang.en": "英語",
    "lang.ja": "日本語",
    "lang.en/ja": "英語 と 日本語",
    "location.remote": "リモート",
    "session.lang.spoken": "音声言語",
    "session.lang.slides": "スライド言語",
    venue: "会場アクセス",
    "venue.name": "九段坂上KSビル",
    "venue.address": "〒102-0073 東京都千代田区九段北1-14-6",
    "venue.accessBytrain": "電車でのアクセス",
    "venue.accessBytrainRoute":
      "東京メトロ半蔵門線、東京メトロ東西線、都営新宿線「九段下」駅 1番出口より徒歩1分",
    "venue.accessByPlane": "飛行機でのアクセス",
    "venue.accessByNaritaAirport": "成田空港からJR 九段下駅まで約90分",
    "venue.accessByHanedaAirport": "羽田空港からJR 九段下駅まで約50分",
    moreDetails: "詳細",
    "specified-commercial-transactions-act": "特定商取引法に基づく表示",
    "code-of-conduct": "行動規範",
    // @ts-expect-error It's not defined in en.ts
    Japanese: "日本語",
    English: "英語",
    openMobileMenu: "ナビゲーションを開く",
    closeMobileMenu: "ナビゲーションを閉じる",
    "jna-address": "〒210-0024 神奈川県川崎市川崎区日進町27-7-903",
    "talk.open": "開場",
    "talk.opening talk": "オープニング/開場説明",
    "talk.Break": "休憩",
    "talk.closing talk": "クロージング",
    "talk.party": "懇親会",
    "talk.sponsor": "スポンサートーク",
  },
}

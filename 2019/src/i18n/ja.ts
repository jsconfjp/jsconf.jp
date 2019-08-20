import { en } from "./en"

type AvailableKeys = keyof typeof en["translation"]

export const ja: {
  translation: Partial<{ [K in AvailableKeys]: string }>
} = {
  translation: {
    "venue.name": "アーツ千代田 3331",
    "venue.address": "〒101-0021 東京都千代田区外神田6丁目11-14",
    "venue.url": "https://www.3331.jp/rentalspace/",
  },
}

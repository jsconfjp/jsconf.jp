import { en } from "./en"

type AvailableKeys = keyof typeof en["translation"]

export const ja: {
  translation: Partial<{ [K in AvailableKeys]: string }>
} = {
  translation: {
    description:
      "jsconf.jp is a JavaScript festival in Japan powered by Japan Node.js Association. This is the first event of jsconf in Japan. We would love to become a bridge between Japanese Web Developers and International Web Developers.",
    festivalPeriod: "November 30th, December 1st 2019",
    ticketsDescription: "TODO: description",
    "venue.name": "アーツ千代田 3331",
    "venue.address": "〒101-0021 東京都千代田区外神田6丁目11-14",
    "venue.url": "https://www.3331.jp/rentalspace/",
    "venue.accessByTokyoMetroGinzaLine":
      "1 min. from Tokyo Metro Ginza Line Suehirocho station (Exit 4)",
    "venue.accessByTokyoMetroChiyodaLine":
      "3 min. from Tokyo Metro Chiyoda Line Yushima station (Exit 6)",
    "venue.accessByToeiOedoLine":
      "6 min. from Toei Oedo Line Ueno-Okachimachi station (Exit A1)",
    "venue.accessByJrOkachimachiStation":
      "7 min. from JR Okachimachi station (Southern Exit)",
    "venue.accessByJrAkihabaraStation":
      "8 min. from JR Akihabara station (Electric City Exit)",
  },
}

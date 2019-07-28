import i18n from "i18next"
import LanguageDetector from "i18next-browser-languagedetector"
import { initReactI18next } from "react-i18next"

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  en: {
    translation: {
      backToTop: "TOP",
      siteName: "JSConf JP",
      description:
        "jsconf.jp is a JavaScript festival in Japan powered by Japan Node.js Association. This is the first event of jsconf in Japan. We would love to become a bridge between Japanese Web Developers and International Web Developers.",
      festivalPeriod: "November 30th, December 1st 2019",
      aboutUs: "About us",
      guestSpeakers: "Guest speakers",
      goToGuests: "CHECK ALL SPEAKERS",
      schedule: "schedule",
      day1: "Day 1",
      day2: "Day 2",
      tickets: "Tickets",
      ticketsDescription: "Tickets will be available from October 1th.",
      comingSoon: "Coming soon",
      venue: "Venue",
      moreDetails: "More details",
      sponsors: "Sponsors",
      "sponsor.platinum": "Platinum",
      "sponsor.gold": "Gold",
      "sponsor.silver": "Silver",
      "sponsor.bronze": "Bronze",
      "venue.name": "3331 Arts Chiyoda",
      "venue.address": "〒101-0021 6-11-14 Sotokanda Chiyoda-ku Tokyo",
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
  },
  ja: {
    translation: {
      backToTop: "TOP",
      siteName: "JSConf JP",
      description:
        "jsconf.jp is a JavaScript festival in Japan powered by Japan Node.js Association. This is the first event of jsconf in Japan. We would love to become a bridge between Japanese Web Developers and International Web Developers.",
      festivalPeriod: "November 30th, December 1st 2019",
      aboutUs: "About us",
      guestSpeakers: "Guest speakers",
      goToGuests: "CHECK ALL SPEAKERS",
      schedule: "schedule",
      day1: "Day 1",
      day2: "Day 2",
      tickets: "Tickets",
      ticketsDescription: "TODO: description",
      comingSoon: "Coming soon",
      venue: "Venue",
      moreDetails: "More details",
      sponsors: "Sponsors",
      "sponsor.platinum": "Platinum",
      "sponsor.gold": "Gold",
      "sponsor.silver": "Silver",
      "sponsor.bronze": "Bronze",
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
  },
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false, // react already safes from xss
    },

    // https://github.com/i18next/i18next-browser-languageDetector#detector-options
    detection: {
      order: ["querystring", "localStorage", "navigator"],
      lookupQuerystring: "lang",
      lookupCookie: "lang",
      lookupLocalStorage: "lang",
      caches: ["localStorage"],
      excludeCacheFor: ["cimode"],
    },
  })

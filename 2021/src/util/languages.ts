import { i18n } from "i18next"

export function enOrJa(i18n: i18n) {
  return (enStr: string, jaStr: string) =>
    isJapanese(i18n.language) && jaStr ? jaStr : enStr || jaStr
}

export function isJapanese(lang: string) {
  return /ja(-\w)*/.test(lang)
}

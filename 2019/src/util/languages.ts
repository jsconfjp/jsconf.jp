import i18next from "i18next"

export function enOrJa(i18n: i18next.i18n) {
  return (enStr: string, jaStr: string) =>
    isJapanese(i18n.language) && jaStr ? jaStr : enStr
}

export function isJapanese(lang: string) {
  return /ja(-\w)*/.test(lang)
}

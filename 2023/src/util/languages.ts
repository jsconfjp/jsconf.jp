import { i18n } from "i18next"
import { useMemo } from "react"
import { useTranslation } from "react-i18next"

export const isJapanese = (lang: string) => /ja(-\w)*/.test(lang)

export function enOrJa(i18n: i18n) {
  return (enStr: string, jaStr: string) =>
    isJapanese(i18n.language) && jaStr ? jaStr : enStr || jaStr
}

const ja = <T>(enStr: T, jaStr: T) => jaStr ?? enStr
const en = <T>(enStr: T, jaStr: T) => enStr ?? jaStr

export function useEnOrJa() {
  const {
    i18n: { language },
  } = useTranslation()
  return useMemo(() => (isJapanese(language) ? ja : en), [language])
}

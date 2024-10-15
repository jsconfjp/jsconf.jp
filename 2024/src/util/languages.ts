import { useTranslation } from "react-i18next"

const isJapanese = (lang: string) => /ja(-\w)*/.test(lang)

export function useEnOrJa() {
  const {
    i18n: { language },
  } = useTranslation()
  return <T>(enStr: T, jaStr: T): T =>
    (isJapanese(language) ? jaStr : enStr) || jaStr || enStr
}

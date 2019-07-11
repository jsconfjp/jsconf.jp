import React from "react"

type Props = {
  languages: string[]
  onChange: (lang: string) => void
}

export function LanguageSwitch(props: Props) {
  const { onChange, languages } = props

  return (
    <>
      {languages.map(lang => (
        <button key={lang} onClick={() => onChange(lang)}>
          {lang}
        </button>
      ))}
    </>
  )
}

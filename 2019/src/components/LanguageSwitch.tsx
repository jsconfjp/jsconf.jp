import React from "react"
import styled from "styled-components"

type Props = {
  languages: Record<string, string>
  currentLanguage: string
  onChange: (lang: string) => void
}

const Lang = styled.a`
  text-decoration: none;
  font-family: ${({ theme }) => theme.fonts.header};
  font-size: 20px;
  color: ${({ theme }) => theme.colors.disabled};

  &[href="#"] {
    color: ${({ theme }) => theme.colors.text};
  }

  ::after {
    margin: 0px 8px;
    content: "/";
  }
  :last-child::after {
    content: "";
  }
`

export function LanguageSwitch(props: Props) {
  const { onChange, currentLanguage, languages } = props

  return (
    <>
      {Object.keys(languages).map(langKey => {
        return (
          <Lang
            key={langKey}
            href={currentLanguage === langKey ? undefined : "#"}
            onClick={e => {
              e.preventDefault()
              onChange(langKey)
            }}
          >
            {languages[langKey]}
          </Lang>
        )
      })}
    </>
  )
}

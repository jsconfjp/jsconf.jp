import React from "react"
import styled from "styled-components"

type Props = {
  languages: Record<Languages, string>
  currentLanguage: string
  onChange: (lang: string) => void
}

const Lang = styled.a`
  text-decoration: none;
  font-family: ${({ theme }) => theme.fonts.header};
  font-size: 2rem;
  border-bottom: 4px solid ${({ theme }) => theme.colors.primary};

  &[href="#"] {
    color: ${({ theme }) => theme.colors.text};
    border-bottom-color: transparent;
  }
`
const Separator = styled.span`
  font-family: ${({ theme }) => theme.fonts.header};
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.disabled};
  margin: 0 0.5em;
`

export function LanguageSwitch(props: Props) {
  const { onChange, currentLanguage, languages } = props
  const [hasMounted, setHasMounted] = React.useState(false)
  const langKeys = Object.keys(languages) as Languages[]

  React.useEffect(() => {setHasMounted(true)}, [])

  return (
    hasMounted
      ? <>
        {langKeys.map((langKey, i) => {
          return (
            <React.Fragment key={langKey}>
              <Lang
                href={currentLanguage?.startsWith(langKey) ? undefined : "#"}
                onClick={e => {
                  e.preventDefault()
                  onChange(langKey)
                }}
              >
                {languages[langKey]}
              </Lang>
              {i + 1 === langKeys.length ? null : <Separator>/</Separator>}
            </React.Fragment>
          )
        })}
      </>
    : null
  )
}

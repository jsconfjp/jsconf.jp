import React from "react"
import { useTranslation } from "react-i18next"
import styled from "styled-components"

type Props = {
  languages: Record<Languages, string>
  onChange: (lang: string) => void
}

const Lang = styled.button<{ selected: boolean }>`
  border: none;
  background: transparent;
  cursor: pointer;
  text-decoration: none;
  font-family: ${({ theme }) => theme.fonts.header};
  font-size: 2rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
  border-bottom: 4px solid
    ${({ theme, selected }) =>
      selected ? theme.colors.primary : "transparent"};
  white-space: nowrap;

  ${({ theme, selected }) =>
    selected
      ? ""
      : `&:hover {
    border-bottom-color: ${theme.colors.disabled};
  }`}
`
const Separator = styled.span`
  font-family: ${({ theme }) => theme.fonts.header};
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.disabled};
  margin: 0 0.5em;
`

export function LanguageSwitch(props: Props) {
  const { onChange, languages } = props
  const [hasMounted, setHasMounted] = React.useState(false)
  const langKeys = Object.keys(languages) as Languages[]

  const { i18n } = useTranslation()

  React.useEffect(() => {
    setHasMounted(true)
  }, [])

  return (
    <>
      {langKeys.map((langKey, i) => {
        const selected = hasMounted && i18n.language.startsWith(langKey)
        return (
          <React.Fragment key={langKey}>
            <Lang
              selected={selected}
              // href={!hasMounted || selected ? undefined : "#"}
              onClick={
                !hasMounted || selected
                  ? undefined
                  : e => {
                      e.preventDefault()
                      onChange(langKey)
                    }
              }
            >
              {languages[langKey]}
            </Lang>
            {i + 1 === langKeys.length ? null : <Separator>/</Separator>}
          </React.Fragment>
        )
      })}
    </>
  )
}

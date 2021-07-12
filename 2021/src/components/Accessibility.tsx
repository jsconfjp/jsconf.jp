import React from "react"
import styled from "styled-components"
import { useTranslation } from "react-i18next"

type Props = {}

const Box = styled.div`
  margin-top: 30px;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.accessibility};
`
const SubTitle = styled.h4`
  display: inline-block;
  margin: 0 0 1em;
  padding: 8px 10px;
  font-size: 1.8rem;
  font-family: ${({ theme }) => theme.fonts.text};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.base};
  background-color: ${({ theme }) => theme.colors.secondary};
`
const Text = styled.p`
  margin: 0.4em 0;
  font-size: 1.8rem;
  font-family: ${({ theme }) => theme.fonts.text};
`

export function Accessibility(_props: Props) {
  const { t } = useTranslation()

  return (
    <Box>
      <SubTitle>{t("venue.accessibilityTitle")}</SubTitle>
      <Text
        dangerouslySetInnerHTML={{
          __html: t("venue.accessibility")
            .trim()
            .replace(/\n/g, "<br/>")
        }}
      />
    </Box>
  )
}

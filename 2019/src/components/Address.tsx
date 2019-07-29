import React from "react"
import styled from "styled-components"
import { useTranslation } from "react-i18next"
import { OutboundLink } from "gatsby-plugin-google-analytics"

type Props = {}

const Title = styled.h3`
  margin-bottom: 0;
  font-size: 24px;
  font-family: ${({ theme }) => theme.fonts.text};
  font-weight: bold;
`
const Text = styled.p`
  margin: 0.4em 0;
  font-size: 18px;
  font-family: ${({ theme }) => theme.fonts.text};
`
const Link = styled(OutboundLink)`
  font-size: 18px;
  font-family: ${({ theme }) => theme.fonts.text};
`
const HyphenList = styled.ul`
  padding: 0;
`
const HyphenListItem = styled.li`
  display: flex;
  align-items: center;
  list-style-type: none;
  font-size: 18px;
  font-family: ${({ theme }) => theme.fonts.text};

  :before {
    content: "-";
    margin-right: 0.5em;
  }
`

export function Address(_props: Props) {
  const { t } = useTranslation()

  return (
    <>
      <Title>{t("venue.name")}</Title>
      <Text>
        <small>{t("venue.address")}</small>
      </Text>
      <Text>
        <Link target="_blank" href={t("venue.url")}>
          {t("venue.url")}
        </Link>
      </Text>
      <HyphenList>
        <HyphenListItem>
          <Text>{t("venue.accessByTokyoMetroGinzaLine")}</Text>
        </HyphenListItem>
        <HyphenListItem>
          <Text>{t("venue.accessByTokyoMetroChiyodaLine")}</Text>
        </HyphenListItem>
        <HyphenListItem>
          <Text>{t("venue.accessByToeiOedoLine")}</Text>
        </HyphenListItem>
        <HyphenListItem>
          <Text>{t("venue.accessByJrOkachimachiStation")}</Text>
        </HyphenListItem>
        <HyphenListItem>
          <Text>{t("venue.accessByJrAkihabaraStation")}</Text>
        </HyphenListItem>
      </HyphenList>
    </>
  )
}

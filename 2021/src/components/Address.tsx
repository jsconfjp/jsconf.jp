import React from "react"
import styled from "styled-components"
import { useTranslation } from "react-i18next"
import { OutboundLink } from "gatsby-plugin-google-analytics"

type Props = {
  summary: boolean
}

const Title = styled.h3`
  margin-bottom: 0;
  font-size: 2.4rem;
  font-family: ${({ theme }) => theme.fonts.text};
  font-weight: bold;
`
const SubTitle = styled.h4`
  display: inline-block;
  margin: 40px 0 0;
  padding: 8px 10px;
  font-size: 1.8rem;
  font-family: ${({ theme }) => theme.fonts.text};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.base};
  background-color: ${({ theme }) => theme.colors.primary};
`
const Text = styled.p`
  margin: 0.4em 0;
  font-size: 1.8rem;
  font-family: ${({ theme }) => theme.fonts.text};
`
const Link = styled(OutboundLink)`
  font-size: 1.8rem;
  font-family: ${({ theme }) => theme.fonts.text};
`
const HyphenList = styled.ul`
  padding: 0;
`
const HyphenListItem = styled.li`
  display: flex;
  align-items: center;
  list-style-type: none;
  font-size: 1.8rem;
  font-family: ${({ theme }) => theme.fonts.text};

  :before {
    content: "-";
    margin-right: 0.5em;
  }
`

export function Address(props: Props) {
  const { summary } = props
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
      <Text>
        <Link
          href="https://www.google.com/maps/d/u/0/viewer?mid=1EHjtxICBFoB_QKSJC9fPTEi-AP2wm_Hl&ll=35.703930662979026%2C139.7698484894413&z=14"
          target="_blank"
        >
          {t("venue.additionalMap")}
        </Link>
      </Text>

      <SubTitle>{t("venue.accessBytrain")}</SubTitle>
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

      {summary ? null : (
        <>
          <SubTitle>{t("venue.accessByPlane")}</SubTitle>
          <HyphenList>
            <HyphenListItem>
              <Text>{t("venue.accessByNaritaAirport")}</Text>
            </HyphenListItem>
            <HyphenListItem>
              <Text>{t("venue.accessByHanedaAirport")}</Text>
            </HyphenListItem>
            <HyphenListItem>
              <Text>{t("venue.accessByJrAkihabaraStation")}</Text>
            </HyphenListItem>
          </HyphenList>
        </>
      )}
    </>
  )
}

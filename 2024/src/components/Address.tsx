import React from "react"
import styled from "styled-components"
import { useTranslation } from "react-i18next"

type Props = {
  summary: boolean
}

const Title = styled.h3`
  margin-bottom: 0;
  font-size: ${({ theme }) => theme.fontSizes.subTitle};
  font-family: ${({ theme }) => theme.fonts.text};
  font-weight: bold;
`
const SubTitle = styled.h4`
  display: inline-block;
  margin: 16px 0 0;
  padding: 8px 10px 0;
  font-size: 1.8rem;
  font-family: ${({ theme }) => theme.fonts.text};
  font-weight: bold;
`
const Text = styled.p`
  margin: 0.4em 0;
  font-size: 1.8rem;
  font-family: ${({ theme }) => theme.fonts.text};
`
const HyphenList = styled.ul`
  margin: 0 0 1em;
  padding: 0;
`
const HyphenListItem = styled.li`
  display: flex;
  align-items: center;
  list-style-type: none;
  font-size: 1.8rem;
  font-family: ${({ theme }) => theme.fonts.text};
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

      <SubTitle>{t("venue.accessBytrain")}</SubTitle>
      <HyphenList>
        <HyphenListItem>
          <Text>{t("venue.accessBytrainRoute")}</Text>
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
          </HyphenList>
        </>
      )}
    </>
  )
}

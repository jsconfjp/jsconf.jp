import React from "react"
import styled, { css } from "styled-components"
import { useTranslation } from "react-i18next"
import { Sponsor, Props as SponsorType } from "./Sponsor"

export type Props = {
  sponsors: SponsorType[]
}

const baseGridStyle = css`
  grid-column-gap: 60px;
  grid-row-gap: 30px;

  ${({ theme }) => theme.breakpoints.mobile} {
    grid-column-gap: 20px;
    grid-row-gap: 20px;
  }
`

const PlatinumBox = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  width: 100%;
  max-width: 780px;
  margin: 0 auto;
  ${baseGridStyle}
`
const GoldBox = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  ${baseGridStyle}
`
const OtherBox = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  ${baseGridStyle}
`
const SubTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.header};
  text-align: center;
  font-size: 30px;
`

export function SponsorList(props: Props) {
  const { sponsors } = props
  const { t } = useTranslation()
  const grades = sponsors.reduce(
    (acc, sponsor) => ({
      ...acc,
      [sponsor.grade]: acc[sponsor.grade].concat([sponsor]),
    }),
    {
      platinum: [],
      gold: [],
      silver: [],
      bronze: [],
    } as { [K in SponsorType["grade"]]: SponsorType[] },
  )

  return (
    <>
      <SubTitle>{t("sponsor.platinum")}</SubTitle>
      <PlatinumBox>
        {grades.platinum.map(platinumSponsor => (
          <Sponsor key={platinumSponsor.url} {...platinumSponsor} />
        ))}
      </PlatinumBox>

      <SubTitle>{t("sponsor.gold")}</SubTitle>
      <GoldBox>
        {grades.gold.map(goldSponsor => (
          <Sponsor key={goldSponsor.url} {...goldSponsor} />
        ))}
      </GoldBox>

      <SubTitle>{t("sponsor.silver")}</SubTitle>
      <OtherBox>
        {grades.silver.map(silverSponsor => (
          <Sponsor key={silverSponsor.url} {...silverSponsor} />
        ))}
      </OtherBox>

      <SubTitle>{t("sponsor.bronze")}</SubTitle>
      <OtherBox>
        {grades.bronze.map(bronzeSponsor => (
          <Sponsor key={bronzeSponsor.url} {...bronzeSponsor} />
        ))}
      </OtherBox>
    </>
  )
}

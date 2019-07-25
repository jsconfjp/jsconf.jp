import React from "react"
import styled from "styled-components"
import { useTranslation } from "react-i18next"
import { Sponsor, Props as SponsorType } from "./Sponsor"
import { SubTitle } from "./SubTitle"

export type Props = {
  sponsors: SponsorType[]
}

const PlatinumBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const GoldBox = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 60px;
  grid-row-gap: 30px;
`
const OtherBox = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 60px;
  grid-row-gap: 30px;
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
          <Sponsor {...platinumSponsor} />
        ))}
      </PlatinumBox>

      <SubTitle>{t("sponsor.gold")}</SubTitle>
      <GoldBox>
        {grades.gold.map(goldSponsor => (
          <Sponsor {...goldSponsor} />
        ))}
      </GoldBox>

      <SubTitle>{t("sponsor.silver")}</SubTitle>
      <OtherBox>
        {grades.silver.map(silverSponsor => (
          <Sponsor {...silverSponsor} />
        ))}
      </OtherBox>

      <SubTitle>{t("sponsor.bronze")}</SubTitle>
      <OtherBox>
        {grades.bronze.map(bronzeSponsor => (
          <Sponsor {...bronzeSponsor} />
        ))}
      </OtherBox>
    </>
  )
}

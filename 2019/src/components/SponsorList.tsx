import React from "react"
import styled from "styled-components"
import { useTranslation } from "react-i18next"
import { Sponsor, Props as SponsorType } from "./Sponsor"
import { SubTitle } from "./SubTitle"

export type Props = {
  sponsors: SponsorType[]
}

const PlatinumContainer = styled.div`
  display: flex;
  justify-content: center;
`
const GoldContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`
const OtherContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
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
      <PlatinumContainer>
        {grades.platinum.map(platinumSponsor => (
          <Sponsor {...platinumSponsor} />
        ))}
      </PlatinumContainer>

      <SubTitle>{t("sponsor.gold")}</SubTitle>
      <GoldContainer>
        {grades.gold.map(goldSponsor => (
          <Sponsor {...goldSponsor} />
        ))}
      </GoldContainer>

      <SubTitle>{t("sponsor.silver")}</SubTitle>
      <OtherContainer>
        {grades.silver.map(silverSponsor => (
          <Sponsor {...silverSponsor} />
        ))}
      </OtherContainer>

      <SubTitle>{t("sponsor.bronze")}</SubTitle>
      <OtherContainer>
        {grades.bronze.map(bronzeSponsor => (
          <Sponsor {...bronzeSponsor} />
        ))}
      </OtherContainer>
    </>
  )
}

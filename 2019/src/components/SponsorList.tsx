import React from "react"
import { useTranslation } from "react-i18next"
import { Sponsor, Props as SponsorType } from "./Sponsor"
import { SubTitle } from "./SubTitle"

export type Props = {
  sponsors: SponsorType[]
}

export function SponsorList(props: Props) {
  const { sponsors } = props
  const { t } = useTranslation()
  const grades = sponsors.reduce(
    (acc, sponsor) => ({
      ...acc,
      _: console.log(sponsor, acc),
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
      {grades.platinum.map(platinumSponsor => (
        <Sponsor {...platinumSponsor} />
      ))}

      <SubTitle>{t("sponsor.gold")}</SubTitle>
      {grades.gold.map(goldSponsor => (
        <Sponsor {...goldSponsor} />
      ))}

      <SubTitle>{t("sponsor.silver")}</SubTitle>
      {grades.silver.map(silverSponsor => (
        <Sponsor {...silverSponsor} />
      ))}

      <SubTitle>{t("sponsor.bronze")}</SubTitle>
      {grades.bronze.map(bronzeSponsor => (
        <Sponsor {...bronzeSponsor} />
      ))}
    </>
  )
}

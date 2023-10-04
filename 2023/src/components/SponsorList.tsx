import React from "react"
import styled, { css } from "styled-components"
import { useTranslation } from "react-i18next"
import { Sponsor, Props as SponsorType } from "./Sponsor"

export type Props = {
  sponsors: SponsorType[]
  showPrText: boolean
}

const baseGridStyle = css`
  grid-column-gap: 60px;
  grid-row-gap: 30px;

  ${({ theme }) => theme.breakpoints.mobile} {
    grid-column-gap: 20px;
    grid-row-gap: 20px;
  }
`

const LargeBox = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  width: 100%;
  max-width: 780px;
  margin: 0 auto;
  ${baseGridStyle}
`
const SmallBox = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  ${baseGridStyle}
`
const SubTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.header};
  text-align: center;
  font-size: ${({ theme }) => theme.fontSizes.subTitle};
`

export function SponsorList(props: Props) {
  const { sponsors, showPrText } = props
  const { t } = useTranslation()
  const grades = sponsors.reduce(
    (acc, sponsor) => ({
      ...acc,
      [sponsor.grade]: (acc[sponsor.grade] ?? []).concat([sponsor]),
    }),
    {} as { [K in SponsorType["grade"]]?: SponsorType[] }
  )

  return (
    <>
      <SubTitle>{t("sponsor.premium")}</SubTitle>
      <LargeBox>
        {grades.premium?.map(platinumSponsor => (
          <Sponsor
            key={platinumSponsor.url}
            {...platinumSponsor}
            showPrText={showPrText}
          />
        ))}
      </LargeBox>

      <SubTitle>{t("sponsor.sponsor")}</SubTitle>
      <SmallBox>
        {grades.sponsor?.map(sponsor => (
          <Sponsor key={sponsor.url} {...sponsor} showPrText={showPrText} />
        ))}
      </SmallBox>
    </>
  )
}

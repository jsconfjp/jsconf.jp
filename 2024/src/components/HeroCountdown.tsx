import React from "react"
import { times } from "../util/misc"
import { useCountdown } from "../util/useCountdown"
import { Temporal } from "@js-temporal/polyfill"
import { useTranslation } from "react-i18next"
import styled from "styled-components"

const Paragraph = styled.p`
  margin: 0.5em 0 0;
  font-family: ${({ theme }) => theme.fonts.text};
  font-size: 2rem;
`

export const HeroCountdown = () => {
  const { t } = useTranslation()
  const duration = useCountdown(times.day1.startsAt, {
    smallestUnit: "minutes",
    largestUnit: "weeks",
    relativeTo: Temporal.Now.plainDateISO("Asia/Tokyo"),
  })
  if (duration.sign != 1) {
    return <></>
  }
  return (
    <Paragraph>
      {t("time.in")}
      {duration.weeks ? `${duration.weeks}${t("time.weeks")}` : ""}
      {duration.days ? `${duration.days}${t("time.days")}` : ""}
      {duration.hours ? `${duration.hours}${t("time.hours")}` : ""}
      {duration.minutes}
      {t("time.minutes")}
    </Paragraph>
  )
}

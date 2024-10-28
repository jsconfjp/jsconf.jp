import React from "react"
import { Temporal } from "@js-temporal/polyfill"
import { TalkType } from "../data/types"
import styled from "styled-components"

function timeToDate(time: string) {
  return Temporal.PlainTime.from(time)
}

type Props = {
  session: TalkType
}

const TalkTime = styled.span`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.header};
  font-size: 1.5rem;
  font-weight: bold;
`

const TalkLength = styled.span`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.header};
  font-size: 1.2rem;
  list-style: none;
  margin-left: 0.5rem;
`

export const EventTime = ({ session: s }: Props) => {
  const start = timeToDate(s.startsAt)
  const end = timeToDate(s.endsAt)
  const diff = start.until(end).total("minutes")

  return (
    <>
      <TalkTime>
        {s.startsAt}-{s.endsAt}
      </TalkTime>
      {diff > 0 && <TalkLength>{`(${diff} min)`}</TalkLength>}
    </>
  )
}

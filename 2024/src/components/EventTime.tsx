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

  @media print {
    font-size: 1em;
  }
`

const TalkStart = styled.span`
  @media print {
    padding-right: .75em;
  }
`
const TalkEnd = styled.span`
  &::before {
    content: "-";
  }
  @media print {
    display: none;
  }
`

const TalkLength = styled.span`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.header};
  font-size: 1.2rem;
  list-style: none;
  margin-left: 0.5rem;

  @media print {
    display: none;
  }
`

export const EventTime = ({ session: s }: Props) => {
  const start = timeToDate(s.startsAt)
  const end = timeToDate(s.endsAt)
  const diff = start.until(end).total("minutes")

  return (
    <>
      <TalkTime>
        <TalkStart>{s.startsAt}</TalkStart>
        <TalkEnd>{s.endsAt}</TalkEnd>
      </TalkTime>
      {diff > 0 && <TalkLength>{`(${diff} min)`}</TalkLength>}
    </>
  )
}

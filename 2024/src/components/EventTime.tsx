import React from "react"
import { differenceInMinutes } from "date-fns"
import { TalkType } from "../data/types"
import styled from "styled-components"

function timeToDate(time: string): Date {
  const [h, m] = time.split(":")
  // TODO: Enter time here!
  return new Date(2024, 10, 19, parseInt(h), parseInt(m))
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
  const diff = differenceInMinutes(end, start)

  return (
    <>
      <TalkTime>
        {s.startsAt}-{s.endsAt}
      </TalkTime>
      {diff > 0 && <TalkLength>{`(${diff} min)`}</TalkLength>}
    </>
  )
}

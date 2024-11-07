import React from "react"
import styled from "styled-components"
import { Session } from "../data/types"

const SpeakerText = styled.span`
  color: ${({ theme }) => theme.colors.text};
  font-size: 1em;
  font-family: ${({ theme }) => theme.fonts.text};
  text-wrap: balance;
`
const SpeakerRT = styled.rt`
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.6em;
  font-family: ${({ theme }) => theme.fonts.text};
`
const SponsorText = styled.span`
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.8em;
  display: block;

  font-family: ${({ theme }) => theme.fonts.text};
`
const ByLineText = styled.span`
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.8em;
  font-style: italic;

  @media not print {
    margin: 0.5em 0;
  }

  @media print {
    margin: 0 0.5em 0 0;
  }
`

const SpeakerEntry = styled.span`
  display: flex;
  flex-direction: column;

  @media print {
    flex-direction: row;
    align-items: end;
  }
`

type Props = {
  session: Session
  byLine?: string
}
type EventSpeaker = {
  name: string
  nameReading?: string | undefined
  sponsor?: string | undefined
}

type SpeakerNameProps = {
  speaker: EventSpeaker
}
export const SpeakerName = ({ speaker }: SpeakerNameProps) => (
  <>
    <SpeakerText>
      {speaker.nameReading && speaker.nameReading != speaker.name ? (
        <ruby>
          {speaker.name}
          <SpeakerRT>{speaker.nameReading.replace(/・/g, " ")}</SpeakerRT>
        </ruby>
      ) : (
        speaker.name
      )}
    </SpeakerText>
    {speaker.sponsor && <SponsorText>{speaker.sponsor}</SponsorText>}
  </>
)

export const EventSpeakers = ({ session: s }: Props) => {
  const speakers: EventSpeaker[] = [
    ...s.sponsors.map(s => ({ name: "", nameReading: "", sponsor: s.name })),
    ...s.speakers.map(s => ({ name: s.name, nameReading: s.nameReading })),
  ]

  if (speakers.length === 0) {
    return null
  }

  return (
    <>
      {speakers.map((s, i) => (
        <SpeakerEntry key={i}>
          <ByLineText>{i == 0 ? "by" : "and"}</ByLineText>
          <SpeakerName speaker={s} />
        </SpeakerEntry>
      ))}
    </>
  )
}

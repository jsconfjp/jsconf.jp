import React from "react"
import styled from "styled-components"
import { Session } from "../data/types"

const SpeakerText = styled.span`
  color: ${({ theme }) => theme.colors.text};
  font-size: 1em;
  font-family: ${({ theme }) => theme.fonts.text};
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
  margin: 0.5em 0;
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
      <ByLineText>by</ByLineText>
      {speakers.map((s, i) =>
        i > 0 ? (
          <React.Fragment key={i}>
            <ByLineText>and</ByLineText>
            <SpeakerName speaker={s} />
          </React.Fragment>
        ) : (
          <SpeakerName key={i} speaker={s} />
        ),
      )}
    </>
  )
}

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
    {speaker.sponsor && (
      <SponsorText>
        {"("}
        {speaker.sponsor}
        {")"}
      </SponsorText>
    )}
  </>
)

export interface SpeakerNamesProps {
  speakers: EventSpeaker[]
  byLine?: string
}
export const SpeakerNames = ({ speakers, byLine }: SpeakerNamesProps) => {
  return (
    <>
      {Array.from(
        (function* () {
          let first = true
          for (const speaker of speakers) {
            if (first) {
              first = false
              if (byLine) {
                yield <ByLineText>{byLine}</ByLineText>
              }
            } else {
              yield <ByLineText>and</ByLineText>
            }
            yield <SpeakerName speaker={speaker} />
          }
        })(),
      )}
    </>
  )
}

export const EventSpeakers = ({ session: s, byLine }: Props) => {
  const speakers: EventSpeaker[] = s.sponsors.length
    ? [
        {
          name: s.presenterName!,
          nameReading: s.presenterNameReading,
          sponsor: s.sponsors[0].name,
        },
      ]
    : ((s.speakers as EventSpeaker[]) ?? []).concat(
        ...(s.presenterName
          ? [{ name: s.presenterName!, nameReading: s.presenterNameReading }]
          : []),
      )
  return <SpeakerNames speakers={speakers} byLine={byLine} />
}

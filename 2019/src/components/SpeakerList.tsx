import React from "react"
import styled from "styled-components"
import { Speaker, SpeakerType, TalkType } from "./Speaker"

export type Props = {
  speakers: SpeakerType[]
  talks: TalkType[]
}

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 60px;
  grid-row-gap: 60px;

  ${({ theme }) => theme.breakpoints.mobile} {
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 20px;
  }
`

export function SpeakerList(props: Props) {
  const { speakers, talks } = props
  const talkMap: { [uuid: string]: TalkType } = talks.reduce(
    (acc, talk) =>
      talk.speakerIDs.reduce(
        (acc, speakerID) => ({ ...acc, [speakerID]: talk }),
        acc,
      ),
    {},
  )

  return (
    <Container>
      {speakers.map(speaker => (
        <Speaker
          key={speaker.name}
          speaker={speaker}
          talk={talkMap[speaker.uuid]}
        />
      ))}
    </Container>
  )
}

import React from "react"
import styled from "styled-components"
import { Speaker, Props as SpeakerType } from "./Speaker"

export type Props = {
  speakers: SpeakerType[]
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
  const { speakers } = props

  return (
    <Container>
      {speakers.map(speaker => (
        <Speaker
          key={speaker.name}
          uuid={speaker.uuid}
          name={speaker.name}
          biography={speaker.biography}
          photoURL={speaker.photoURL}
          talkTitle={speaker.talkTitle}
          talkDescription={speaker.talkDescription}
          spokenLanguage={speaker.spokenLanguage}
          slideLanguage={speaker.slideLanguage}
          github={speaker.github}
          twitter={speaker.twitter}
        />
      ))}
    </Container>
  )
}

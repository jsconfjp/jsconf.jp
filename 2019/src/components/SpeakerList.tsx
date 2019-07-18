import React from "react"
import styled from "styled-components"
import { Speaker, Props as SpeakerType } from "./Speaker"

export type Props = {
  speakers: SpeakerType[]
}

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`

export function SpeakerList(props: Props) {
  const { speakers } = props

  return (
    <Container>
      {speakers.map(speaker => (
        <Speaker
          key={speaker.name}
          name={speaker.name}
          photoURL={speaker.photoURL}
          biography={speaker.biography}
          github={speaker.github}
          twitter={speaker.twitter}
        />
      ))}
    </Container>
  )
}

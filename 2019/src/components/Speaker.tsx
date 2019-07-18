import React from "react"
import styled from "styled-components"

export type Props = {
  name: string
  photoURL: string
  biography: string
  github: string
  twitter: string
}

const Container = styled.div``

export function Speaker(props: Props) {
  const { name, photoURL, biography, github, twitter } = props

  return (
    <Container>
      <img src={photoURL} width="100" />
      <h2>{name}</h2>
      <p>{biography}</p>
      <p>
        <a href={github} target="_blank">
          GitHub
        </a>
        <a href={twitter} target="_blank">
          Twitter
        </a>
      </p>
    </Container>
  )
}

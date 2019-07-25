import React from "react"
import styled from "styled-components"

export type Props = {
  name: string
  photoURL: string
  talkTitle: string
  github: string
  twitter: string
}

const Title = styled.h2`
  margin: 0;
  padding: 10px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.text};
  font-size: 20px;
`
const Name = styled.p`
  margin-bottom: 0;
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.text};
  font-size: 16px;
`

export function Speaker(props: Props) {
  const { name, photoURL, talkTitle } = props

  return (
    <div>
      <img src={photoURL} width="100%" />
      <Title>{talkTitle}</Title>
      <Name>{name}</Name>
    </div>
  )
}

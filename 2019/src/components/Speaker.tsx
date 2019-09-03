import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

export type Props = {
  uuid: string
  name: string
  biography: string
  photoURL: string
  talkTitle: string
  talkDescription: string
  spokenLanguage: string
  slideLanguage: string
  github: string
  twitter: string
}

const LinkContainer = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text};
`
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
  const { uuid, name, photoURL, talkTitle } = props

  return (
    <LinkContainer to={`speaker/${uuid}`}>
      <img src={photoURL} width="100%" />
      <Title>{talkTitle}</Title>
      <Name>{name}</Name>
    </LinkContainer>
  )
}

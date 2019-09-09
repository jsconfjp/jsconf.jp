import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { useTranslation } from "react-i18next"

export type Props = {
  uuid: string
  name: string
  biography: string
  biographyJa: string
  photoURL: string
  talkTitle: string
  talkTitleJa: string
  talkDescription: string
  talkDescriptionJa: string
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
  const { i18n } = useTranslation()
  const { uuid, name, photoURL, talkTitle, talkTitleJa } = props
  const isEnglish = i18n.language === "en"

  return (
    <LinkContainer to={`speaker/${uuid}`}>
      <img src={photoURL} width="100%" />
      <Title>{isEnglish ? talkTitle : talkTitleJa || talkTitle}</Title>
      <Name>{name}</Name>
    </LinkContainer>
  )
}

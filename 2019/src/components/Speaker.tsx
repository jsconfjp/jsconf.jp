import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { useTranslation } from "react-i18next"
import Image, { FluidObject } from "gatsby-image"

export type TalkType = {
  uuid: string
  title: string
  titleJa: string
  description: string
  descriptionJa: string
  spokenLanguage: string
  slideLanguage: string
  speakerIDs: string[]
  date: string
  startsAt: string
  endsAt: string
  room: string
}

export type SpeakerType = {
  uuid: string
  name: string
  biography: string
  biographyJa: string
  github: string
  twitter: string
}

export type AvatarType = {
  originalName: string
  originalImg: string
} & FluidObject

export type Props = {
  speaker: SpeakerType
  avatar: AvatarType
  talk: TalkType
}

const LinkContainer = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text};
`
const Avatar = styled(Image)`
  width: 100%;
  max-width: 273px;
`
const Title = styled.h2`
  margin: 0;
  padding: 10px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.text};
  font-size: 20px;
  word-break: break-all;
`
const Name = styled.p`
  margin-bottom: 0;
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.text};
  font-size: 16px;
`

export function Speaker(props: Props) {
  const { i18n } = useTranslation()
  const { talk, speaker, avatar } = props
  const { uuid, title, titleJa } = talk
  const { name } = speaker

  const enOrJa = (enStr: string, jaStr: string) => {
    return i18n.language === "en" ? enStr || jaStr : jaStr || enStr
  }

  if (!uuid || uuid.endsWith("TBA")) {
    return (
      <div>
        <Avatar fluid={avatar} loading="lazy" />
        <Title lang="en">{enOrJa(title, titleJa)}</Title>
        <Name>{name}</Name>
      </div>
    )
  }

  return (
    <LinkContainer to={`talk/${uuid}`}>
      <Avatar fluid={avatar} loading="lazy" />
      <Title>{enOrJa(title, titleJa)}</Title>
      <Name>{name}</Name>
    </LinkContainer>
  )
}

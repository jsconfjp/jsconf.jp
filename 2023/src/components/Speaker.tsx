import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { useTranslation } from "react-i18next"
import { GatsbyImage as Image, IGatsbyImageData } from "gatsby-plugin-image"
import { enOrJa } from "../util/languages"
import { SpeakerType, TalkType } from "../data/types"

export type AvatarType = {
  uuid: string
} & IGatsbyImageData

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
  font-size: 2rem;
  overflow-wrap: break-word;
  word-break: break-word;
  hyphens: auto;
`
const Name = styled.p`
  margin-bottom: 0;
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.text};
  font-size: 1.6rem;
`

export function Speaker(props: Props) {
  const { i18n } = useTranslation()
  const { talk, speaker, avatar } = props
  if (!talk) {
    return <>???</>
  }
  const { uuid, title, titleJa } = talk
  const { name } = speaker

  if (!uuid || title === "TBA") {
    return (
      <div>
        <Avatar image={avatar} alt={name} loading="lazy" />
        <Title>{enOrJa(i18n)(title, titleJa)}</Title>
        <Name>{name}</Name>
      </div>
    )
  }

  return (
    <LinkContainer to={`/talk/${uuid}`}>
      <Avatar image={avatar} alt={name} loading="lazy" />
      <Title>{enOrJa(i18n)(title, titleJa)}</Title>
      <Name>{name}</Name>
    </LinkContainer>
  )
}

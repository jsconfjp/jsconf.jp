import React from "react"
import styled, { DefaultTheme } from "styled-components"
import { Link } from "gatsby"
import { GatsbyImage as Image, IGatsbyImageData } from "gatsby-plugin-image"
import { SpeakerType, TalkType } from "../data/types"
import { SpeakerName } from "./EventSpeakers"
import { rgba } from "../util/rgba"

export type AvatarType = {
  uuid: string
} & IGatsbyImageData

export type Props = {
  speaker: SpeakerType
  avatar: AvatarType
  talk: TalkType
}

function box(theme: DefaultTheme) {
  return `
  background: ${theme.colors.base};
  padding: .8rem;
  max-width: 250px;
  min-width: 120px;
  flex-grow: 1;
  & {
    box-shadow: ${rgba(theme.colors.primary, 0.15)} 0px 13px 27px -5px, ${rgba(
      theme.colors.primary,
      0.2,
    )} 0px 8px 16px -8px;
  }
  &:hover {
    box-shadow: ${rgba(theme.colors.primary, 0.35)} 0px 13px 27px -5px, ${rgba(
      theme.colors.primary,
      0.5,
    )} 0px 8px 16px -8px;
  }
`
}

const LinkContainer = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text};
  ${({ theme }) => box(theme)}
`
const DivContainer = styled.div`
  ${({ theme }) => box(theme)}
`

const Avatar = styled(Image)`
  width: 100%;
`

const Name = styled.p`
  margin: 0.5em;
  margin-bottom: 0.2em;
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.text};
  font-size: 2rem;
  min-height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Speaker = (props: Props) => {
  const { talk, speaker, avatar } = props
  if (!talk) {
    return <>???</>
  }
  const { uuid } = talk
  const { name } = speaker

  const content = (
    <>
      <Avatar image={avatar} alt={name} loading="lazy" />
      <Name>
        <SpeakerName speaker={speaker} />
      </Name>
    </>
  )

  return uuid ? (
    <LinkContainer to={`/talk/${uuid}`}>{content}</LinkContainer>
  ) : (
    <DivContainer>{content}</DivContainer>
  )
}

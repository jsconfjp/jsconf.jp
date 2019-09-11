import React, { useLayoutEffect, useState, useRef } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { useTranslation } from "react-i18next"

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
  photoURL: string
  github: string
  twitter: string
}

export type Props = {
  speaker: SpeakerType
  talk: TalkType
}

const LinkContainer = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text};
`
const Avatar = styled.img`
  width: 100%;
  object-fit: cover;
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
  const { talk, speaker } = props
  const { uuid, title, titleJa } = talk
  const { name, photoURL } = speaker
  const ref = useRef<HTMLImageElement>(null)
  const [width, setWidth] = useState<string | number>("auto")
  useLayoutEffect(() => {
    return () => {
      const { width } = ref.current!.getBoundingClientRect()
      setWidth(width)
    }
  }, [ref])

  const enOrJa = (enStr: string, jaStr: string) => {
    return i18n.language === "en" ? enStr || jaStr : jaStr || enStr
  }

  return (
    <LinkContainer to={`talk/${uuid}`}>
      <Avatar src={photoURL} width="100%" height={width} ref={ref} />
      <Title>{enOrJa(title, titleJa)}</Title>
      <Name>{name}</Name>
    </LinkContainer>
  )
}

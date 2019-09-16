import React from "react"
import styled from "styled-components"
import { useTranslation } from "react-i18next"
import Image from "gatsby-image"
import Markdown from "react-markdown"

import { Layout } from "../components/Layout"
import { SEO } from "../components/Seo"
import { Title } from "../components/Title"
import { ResponsiveBox } from "../components/ResponsiveBox"
import { Breadcrumb } from "../components/Breadcrumb"
import { SpeakerType, TalkType, AvatarType } from "../components/Speaker"
import { SubTitle } from "../components/SubTitle"

type Props = {
  pageContext: {
    speakers: SpeakerType[]
    avatars: AvatarType[]
    talk: TalkType
  }
}

const SpeakerBox = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 2em;

  ${({ theme }) => theme.breakpoints.mobile} {
    flex-direction: column;
  }
`
const Description = styled(Markdown)`
  font-family: ${({ theme }) => theme.fonts.text};
  font-size: 18px;
`
const Biography = styled(Description)`
  flex: 1;
  margin: 0;
  margin-left: 60px;

  ${({ theme }) => theme.breakpoints.mobile} {
    margin-left: 0;
    margin-top: 40px;
  }
`
const Avatar = styled(Image)`
  width: 100%;
  max-width: 273px;

  ${({ theme }) => theme.breakpoints.mobile} {
    max-width: 100%;
  }
`
const TalkBox = styled.div`
  font-family: ${({ theme }) => theme.fonts.text};
  background-color: ${({ theme }) => theme.colors.talkBg};
  padding: 40px;

  ${({ theme }) => theme.breakpoints.mobile} {
    padding: 2em 1em;
  }
`
const TalkTitle = styled(SubTitle)`
  font-family: ${({ theme }) => theme.fonts.header};
  margin-bottom: 0.5em;
  font-size: 24px;
  text-align: left;
`

export default function Speaker(props: Props) {
  const { t, i18n } = useTranslation()
  const {
    pageContext: { speakers, avatars, talk },
  } = props
  const {
    title,
    titleJa,
    description,
    descriptionJa,
    spokenLanguage,
    slideLanguage,
    date,
    startsAt,
    endsAt,
    room,
  } = talk
  const speakerNames = speakers.map(speaker => speaker.name).join(" and ")
  const enOrJa = (enStr: string, jaStr: string) => {
    return i18n.language === "en" ? enStr || jaStr : jaStr || enStr
  }

  return (
    <Layout>
      <SEO
        title={`${enOrJa(title, titleJa)} - ${speakerNames}`}
        ogImage={avatars.length ? avatars[0].originalImg : undefined}
      />
      <ResponsiveBox>
        <Breadcrumb path={["talk", title]} />
        <Title>{speakerNames}</Title>
        {speakers.map((speaker, i) => (
          <SpeakerBox key={speaker.uuid}>
            <Avatar fluid={avatars[i]} loading="eager" />
            <Biography
              source={enOrJa(speaker.biography, speaker.biographyJa)}
            />
          </SpeakerBox>
        ))}
        <TalkBox>
          <TalkTitle>{enOrJa(title, titleJa)}</TalkTitle>
          <p>
            {date}, {startsAt} - {endsAt}
            <br />
            Room: {room}
            <br />
            Spoken language: {t(spokenLanguage)}
            {slideLanguage ? (
              <>
                <br />
                Slide language: {t(slideLanguage)}
              </>
            ) : null}
            <br />
          </p>
          <Description source={enOrJa(description, descriptionJa)} />
        </TalkBox>
      </ResponsiveBox>
    </Layout>
  )
}

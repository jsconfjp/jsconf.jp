import React from "react"
import styled from "styled-components"

import { Layout } from "../components/Layout"
import { SEO } from "../components/Seo"
import { Title } from "../components/Title"
import { ResponsiveBox } from "../components/ResponsiveBox"
import { Breadcrumb } from "../components/Breadcrumb"
import { Props as SpeakerType } from "../components/Speaker"
import { SubTitle } from "../components/SubTitle"

type Props = {
  pageContext: {
    speaker: SpeakerType
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
const Description = styled.p`
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
const Avatar = styled.img`
  width: 100%;
  max-width: 273px;

  ${({ theme }) => theme.breakpoints.mobile} {
    max-width: fit-content;
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
  const {
    pageContext: { speaker },
  } = props
  const {
    name,
    talkTitle,
    talkDescription,
    spokenLanguage,
    slideLanguage,
    biography,
    photoURL,
  } = speaker
  const date = "TBA"
  const startsAt = "XX:XX"
  const endsAt = "XX:XX"
  const room = "TBA"

  return (
    <Layout>
      <SEO title={`${talkTitle} - ${name}`} />
      <ResponsiveBox>
        <Breadcrumb path={["speakers", name]} />
        <Title>{name}</Title>
        <SpeakerBox>
          <Avatar src={photoURL} />
          <Biography>{biography}</Biography>
        </SpeakerBox>
        <TalkBox>
          <TalkTitle>{talkTitle}</TalkTitle>
          <p>
            {date}, {startsAt} - {endsAt}
            <br />
            Room: {room}
            <br />
            Spoken language: {spokenLanguage}
            <br />
            Slide language: {slideLanguage}
            <br />
          </p>
          <Description>{talkDescription}</Description>
        </TalkBox>
      </ResponsiveBox>
    </Layout>
  )
}

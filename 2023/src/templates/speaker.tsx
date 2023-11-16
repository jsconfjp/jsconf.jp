import React from "react"
import styled from "styled-components"
import { useTranslation } from "react-i18next"
import { GatsbyImage as Image } from "gatsby-plugin-image"
import Markdown from "react-markdown"
import { Layout } from "../components/Layout"
import { SEO } from "../components/Seo"
import { ResponsiveBox } from "../components/ResponsiveBox"
import { Breadcrumb } from "../components/Breadcrumb"
import { AvatarType } from "../components/Speaker"
import { SpeakerName, SpeakerNames } from "../components/EventSpeakers"
import { SpeakerType, TalkType } from "../data/types"
import { enOrJa } from "../util/languages"
import { EventTime } from "../components/EventTime"
import { Room } from "../components/RoomLegend"
import { Rooms } from "../util/misc"

type Props = {
  pageContext: {
    speakers: SpeakerType[]
    avatars: AvatarType[]
    sponsors: { uuid: string; name: string; prText: string; logoUrl: string }[]
    talk: TalkType
  }
}

const SpeakerBox = styled.div`
  display: flex;
  flex-direction: row;
  margin: 2em 0;
  padding: 0 2.5rem;

  ${({ theme }) => theme.breakpoints.mobile} {
    flex-direction: column;
  }
`

const SpeakerSide = styled.div`
  font-family: ${({ theme }) => theme.fonts.text};
  flex: 1;
  font-size: 1.8rem;
  margin: 0 3em;

  ${({ theme }) => theme.breakpoints.mobile} {
    margin: 2em 0;
  }
`
const Avatar = styled(Image)`
  width: 100%;
  max-width: 273px;

  ${({ theme }) => theme.breakpoints.mobile} {
    max-width: 100%;
  }
`
const SponsorLogo = styled.img`
  width: 100%;
  object-fit: contain;
  max-width: 273px;

  ${({ theme }) => theme.breakpoints.mobile} {
    max-width: 100%;
  }
`
const TalkBox = styled.div<{
  track: Rooms
}>`
  font-family: ${({ theme }) => theme.fonts.text};
  background-color: ${({ track, theme }) => theme.colors[`room${track}`]};
  border-left: 5px solid;
  border-color: ${({ track, theme }) => theme.colors[`room${track}Border`]};
  padding: 2rem 5rem;
  position: relative;
  margin: 0 1.25rem;

  ${({ theme }) => theme.breakpoints.mobile} {
    padding: 1em 2em;
  }
`
const TalkTitle = styled.h2`
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.fonts.header};
  margin: 0 0 0.5em;
  font-size: ${({ theme }) => theme.fontSizes.subTitle};
  text-align: left;
`

export default function Speaker(props: Props) {
  const { t, i18n } = useTranslation()
  const {
    pageContext: { speakers, avatars, sponsors, talk },
  } = props
  const {
    title,
    titleJa,
    description,
    descriptionJa,
    spokenLanguage,
    slideLanguage,
    room,
  } = talk
  const speakerNames = speakers.length
    ? speakers.map(speaker => speaker.name)
    : talk.presenterName ?? ""

  return (
    <Layout>
      <SEO
        title={`${enOrJa(i18n)(title, titleJa)} - ${speakerNames}`}
        // @ts-expect-error FIXME
        ogImage={avatars.length ? avatars[0].images.sources : undefined}
      />
      <ResponsiveBox>
        <Breadcrumb path={[{ label: t("speakers"), to: "/speakers" }, title]} />
        {speakers.map((speaker, i) => (
          <SpeakerBox key={speaker.uuid}>
            <Avatar image={avatars[i]} alt={speaker.name} loading="eager" />
            <SpeakerSide>
              <h1>
                <SpeakerName speaker={speaker} />
              </h1>
              <Markdown>
                {enOrJa(i18n)(speaker.biography, speaker.biographyJa)}
              </Markdown>
            </SpeakerSide>
          </SpeakerBox>
        ))}
        {sponsors.map(sponsor => (
          <SpeakerBox key={sponsor.uuid}>
            <SponsorLogo
              src={sponsor.logoUrl}
              alt={sponsor.name}
              loading="eager"
            />
            <SpeakerSide>
              <h1>
                <SpeakerNames
                  speakers={[
                    {
                      name: talk.presenterName!,
                      nameReading: talk.presenterNameReading,
                      sponsor: sponsor.name,
                    },
                  ]}
                />
              </h1>
              <Markdown>{sponsor.prText}</Markdown>
            </SpeakerSide>
          </SpeakerBox>
        ))}
        <Room room={room} />
        <TalkBox track={room}>
          <TalkTitle>{enOrJa(i18n)(title, titleJa)}</TalkTitle>
          <p>
            <EventTime session={talk} />
            <br />
            {t("session.lang.spoken")}: {t(`lang.${spokenLanguage}`)}
            {slideLanguage ? (
              <>
                <br />
                {t("session.lang.slides")}: {t(`lang.${slideLanguage}`)}
              </>
            ) : null}
            <br />
          </p>
          <Markdown>{enOrJa(i18n)(description, descriptionJa)}</Markdown>
        </TalkBox>
      </ResponsiveBox>
    </Layout>
  )
}

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
import { SpeakerName } from "../components/EventSpeakers"
import { SpeakerType, TalkType } from "../data/types"
import { useEnOrJa } from "../util/languages"
import { EventTime } from "../components/EventTime"
import { Room } from "../components/RoomLegend"
import { Rooms } from "../util/misc"
import { ExternalLink } from "@styled-icons/remix-line/ExternalLink"
import { Mastodon } from "@styled-icons/remix-line/Mastodon"
import { Github } from "@styled-icons/remix-line/Github"
import { Twitter } from "@styled-icons/remix-line/Twitter"
import { Link } from "gatsby"
import { Tags } from "../components/Tags"
import { I18N } from "../components/I18N"

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
  padding: 2rem 3rem;
  position: relative;
  margin: 0 1.25rem;

  ${({ theme }) => theme.breakpoints.mobile} {
    padding: 1em 2em;
  }
`
const TalkTitle = styled.h2`
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.fonts.header};
  margin: 0.5em 0;
  font-size: ${({ theme }) => theme.fontSizes.subTitle};
  text-align: left;
`

type SocialLinksProps = {
  speaker: SpeakerType
}

const SocialLinkContainer = styled.ul`
  &,
  & > li {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
  & {
    display: flex;
  }
  & > li > a {
    padding: 0.4em;
    color: ${({ theme }) => theme.colors.disabledText};
    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
  svg {
    width: 1.6em;
  }
`

function SocialLinks(props: SocialLinksProps) {
  const { speaker } = props
  const socialLinks = [
    speaker.homepage ? (
      <Link to={speaker.homepage}>
        <ExternalLink />
      </Link>
    ) : null,
    speaker.github ? (
      <Link to={`https://github.com/${speaker.github}`}>
        <Github />
      </Link>
    ) : null,
    speaker.mastodon ? (
      <Link to={speaker.mastodon}>
        <Mastodon />
      </Link>
    ) : null,
    speaker.twitter ? (
      <Link to={`https://twitter.com/${speaker.twitter}`}>
        <Twitter />
      </Link>
    ) : null,
  ]
    .filter(Boolean)
    .map(entry => <li>{entry}</li>)

  if (!socialLinks.length) {
    return null
  }

  return <SocialLinkContainer>{socialLinks}</SocialLinkContainer>
}

const SpeakerPronounWrap = styled.em`
  margin-left: 0.5em;
  font-size: 0.75em;
`

type SpeakerPronounProps = {
  speaker: SpeakerType
}

const SpeakerPronoun = ({ speaker }: SpeakerPronounProps) => {
  if (!speaker.pronoun) {
    return null
  }
  return (
    <SpeakerPronounWrap>
      {"("}
      {speaker.pronoun}
      {")"}
    </SpeakerPronounWrap>
  )
}

type SlidesProps = {
  session: TalkType
}
const SlidesBox = styled.div`
  margin-top: 2rem;
  a {
    color: ${({ theme }) => theme.colors.text};
    font-size: 1em;
  }
  svg {
    width: 1.6em;
    margin-right: 0.3em;
  }
`
const Slides = ({ session }: SlidesProps) => {
  if (!session.slidesUrl) return null
  return (
    <SlidesBox>
      <Link to={session.slidesUrl}>
        <ExternalLink />
        <I18N k="slides" />
      </Link>
    </SlidesBox>
  )
}

type YoutubeProps = {
  session: TalkType
}
const Youtube = ({ session: { youtube } }: YoutubeProps) => {
  if (!youtube) return null
  const [_, id] = /watch\?v=(.*)$/g.exec(youtube) || []
  if (!id) return null
  return (
    <iframe
      style={{ maxWidth: "100%" }}
      width="560"
      height="315"
      src={`https://www.youtube.com/embed/${id}`}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    />
  )
}

export const Head = (props: Props) => {
  const enOrJa = useEnOrJa()
  const {
    pageContext: { speakers, avatars, sponsors, talk },
  } = props

  const { title, titleJa } = talk

  const speakerNames = speakers.length
    ? speakers.map(s => s.name)
    : sponsors.map(s => s.name)

  return (
    <SEO
      title={`${enOrJa(title, titleJa)} - ${speakerNames}`}
      // @ts-expect-error FIXME
      ogImage={avatars.length ? avatars[0].images.sources : undefined}
    />
  )
}

export default function Speaker(props: Props) {
  const { t } = useTranslation()
  const enOrJa = useEnOrJa()
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
    track,
  } = talk

  const location = speakers.length
    ? speakers[0]?.location ?? "on-site"
    : "on-site"

  const langTags =
    spokenLanguage !== slideLanguage
      ? [
          `${t("session.lang.spoken")}: ${t(`lang.${spokenLanguage}`)}`,
          `${t("session.lang.slides")}: ${t(`lang.${slideLanguage}`)}`,
        ]
      : [t(`lang.${spokenLanguage}`)]

  if (location === "remote") {
    langTags.push(t("location.remote"))
  }

  return (
    <Layout>
      <ResponsiveBox>
        <Breadcrumb path={[{ label: t("speakers"), to: "/speakers" }, title]} />
        {speakers.map((speaker, i) => (
          <SpeakerBox key={speaker.uuid}>
            <Avatar image={avatars[i]} alt={speaker.name} loading="eager" />
            <SpeakerSide>
              <h1>
                <SpeakerName speaker={speaker} />
                <SpeakerPronoun speaker={speaker} />
              </h1>
              <Markdown>
                {enOrJa(speaker.biography, speaker.biographyJa)}
              </Markdown>
              <SocialLinks speaker={speaker} />
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
                <SpeakerName
                  speaker={{
                    name: "",
                    nameReading: "",
                    sponsor: sponsor.name,
                  }}
                />
              </h1>
              <Markdown>{sponsor.prText}</Markdown>
            </SpeakerSide>
          </SpeakerBox>
        ))}
        <Room track={track} />
        <TalkBox track={track}>
          <EventTime session={talk} />
          <TalkTitle>{enOrJa(title, titleJa)}</TalkTitle>
          <Tags>{langTags}</Tags>
          <Markdown>{enOrJa(description, descriptionJa)}</Markdown>
          <Slides session={talk} />
          <Youtube session={talk} />
        </TalkBox>
      </ResponsiveBox>
    </Layout>
  )
}

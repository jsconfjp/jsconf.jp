import React, { useLayoutEffect } from "react"
import styled from "styled-components"
import { useTranslation } from "react-i18next"
import { useStaticQuery, graphql } from "gatsby"
import flatten from "lodash/flatten"

import { Layout } from "../components/Layout"
import { SEO } from "../components/Seo"
import { Title } from "../components/Title"
import { ResponsiveBox } from "../components/ResponsiveBox"
import { Breadcrumb } from "../components/Breadcrumb"
import { EventTime } from "../components/EventTime"
import { EventSpeakers } from "../components/EventSpeakers"
import { RoomLegend } from "../components/RoomLegend"
import { TalkType, SpeakerType, Session } from "../data/types"
import { generateTimetable } from "../util/generateTimetable"
import { rangeTimeBoxes, escapeTime } from "../util/rangeTimeBoxes"
import { Dates, times, Rooms, rooms } from "../util/misc"
import { useEnOrJa } from "../util/languages"
import { rgba } from "../util/rgba"
import { Tags } from "../components/Tags"
import { OptionalLink } from "../components/OptionalLink"

const dummyTrack = String.fromCharCode(
  rooms[rooms.length - 1].charCodeAt(0) + 1,
) as Rooms

function getHours(time: string | Date) {
  if (typeof time === "string") {
    return parseInt(time.split(":")[0])
  }
  return time.getHours()
}

const Grid = styled.div<{
  "starts-at": Date | string
  "ends-at": Date | string
}>`
  display: grid;
  grid-column-gap: 1em;
  grid-template-columns: ${rooms
    .concat(dummyTrack)
    .map(r => `[${r}]`)
    .join(" 1fr ")};
  grid-template-rows: ${({ "starts-at": startsAt, "ends-at": endsAt }) =>
    rangeTimeBoxes(5, getHours(startsAt), getHours(endsAt))
      .map(t => `[t-${escapeTime(t)}]`)
      .join(" minmax(1em, max-content) ")};

  ${({ theme }) => theme.breakpoints.mobile} {
    display: flex;
    flex-direction: column;
  }
`
const Area = styled(OptionalLink)<{
  track: Rooms
  ["starts-at"]: string
  ["ends-at"]: string
  ["$is-break"]: boolean
}>`
  margin-bottom: 1em;
  padding: 1em;
  text-decoration: none;
  position: relative;
  grid-column: ${({ track, "$is-break": isBreak }) =>
    isBreak ? `A / ${dummyTrack}` : track};
  grid-row: ${({ "starts-at": startsAt, "ends-at": endsAt }) =>
    `t-${escapeTime(startsAt)} / t-${escapeTime(endsAt)}`};
  background-color: ${({ track, "$is-break": isBreak, theme, to }) =>
    rgba(
      isBreak ? theme.colors.disabled : theme.colors[`room${track}`],
      to ? 1.0 : 0.4,
    )};
  border-left: 5px solid;
  border-color: ${({ track, "$is-break": isBreak, theme, to }) =>
    rgba(
      isBreak ? theme.colors.disabledText : theme.colors[`room${track}Border`],
      to ? 1.0 : 0.4,
    )};
  display: flex;
  flex-direction: column;
  justify-content: stretch;

  &::before {
    content: "${({ track }) => track}";
    font-family: ${({ theme }) => theme.fonts.text};
    font-weight: bold;
    color: ${({ theme }) => theme.colors.base};
    font-size: 0.7em;
    position: absolute;
    font-family: ${({ theme }) => theme.fonts.text};
    font-weight: bold;
    color: ${({ theme }) => theme.colors.base};
    font-size: 0.7em;
    top: -8px;
    left: -10px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 16px;
    height: 16px;
    border-radius: 100%;
    background-color: ${({ track, "$is-break": isBreak, theme }) =>
      isBreak ? theme.colors.disabledText : theme.colors[`room${track}Border`]};
  }

  ${({ to }) =>
    to
      ? `&:hover {
    left: -2px;
    top: -2px;
    &::before {
      top: -10px;
      left: -12px;
      width: 20px;
      height: 20px;
    }
  }`
      : ""}

  ${({ theme }) => theme.breakpoints.mobile} {
    margin-bottom: 1em;
  }
`

const SubTitle = styled.h2`
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.fonts.header};
  font-size: ${({ theme }) => theme.fonts.text};
  margin: 20px 0 1em;
  padding: 0.2em 1em;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`
const RoomLegendBox = styled.div`
  margin-bottom: 2em;
`
const Text = styled.span`
  color: ${({ theme }) => theme.colors.text};
  display: block;
  margin: 0.75rem 0;
  font-size: 2rem;
  font-family: ${({ theme }) => theme.fonts.text};
`

const AreaTitle = styled.div`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.header};
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  ul {
    display: flex;
    padding-left: 0;
    margin: 0;
  }
`
const AreaFooter = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: row;
  align-items: end;
  justify-content: end;
  margin-top: 2.5rem;
`

export const Head = () => {
  const { t } = useTranslation()
  return <SEO title={t("schedule")} description={t("schedule.description")} />
}

export default function SchedulePage() {
  const { t, i18n } = useTranslation()
  const enOrJa = useEnOrJa()
  const { allSpeakersYaml, allSponsorsYaml, allTalksYaml } = useStaticQuery(
    graphql`
      query {
        allSpeakersYaml {
          edges {
            node {
              uuid
              name
              nameReading
              location
            }
          }
        }
        allSponsorsYaml {
          edges {
            node {
              uuid
              name
              grade
              url
              logoUrl
              prText
            }
          }
        }
        allTalksYaml {
          edges {
            node {
              uuid
              kind
              title
              titleJa
              description
              descriptionJa
              spokenLanguage
              slideLanguage
              speakerIDs
              sponsorIDs
              startsAt
              endsAt
              track
              stream
              date
            }
          }
        }
      }
    `,
  )
  const speakers: SpeakerType[] = allSpeakersYaml.edges.map(
    ({ node }: any) => node,
  )
  const sponsors: any[] = allSponsorsYaml.edges.map(({ node }: any) => node)
  const talks: TalkType[] = allTalksYaml.edges.map(({ node }: any) => node)
  const timetable = generateTimetable({ speakers, sponsors, talks })
  const days = Object.keys(times).sort() as Dates[]
  const dateTimeFormatter = new Intl.DateTimeFormat(i18n.language, {
    dateStyle: "medium",
  })

  // Open page with hash (ex. direct access, reload)
  useLayoutEffect(() => {
    if (!location.hash) {
      return
    }

    const selector = location.hash
    const el = document.querySelector(selector)
    if (!el) {
      return
    }
    const { top } = el.getBoundingClientRect()
    window.scrollTo({ top })
  }, [])

  function getStreamSession(
    talk: TalkType,
    sessions: Session[],
  ): string | undefined {
    const session = sessions.find(
      session =>
        session.date === talk.date &&
        session.startsAt === talk.startsAt &&
        session.track === talk.stream,
    )
    if (!session) {
      return
    }
    return getSessionName(session, sessions)
  }

  function getSessionName(talk: TalkType, sessions: Session[]): string {
    switch (talk.kind) {
      case "OPEN": {
        return i18n.t("talk.open")
      }
      case "OPENING_TALK": {
        return i18n.t("talk.opening talk")
      }
      case "STREAM": {
        return `${getStreamSession(talk, sessions) ?? "???"}${i18n.t("talk.stream")}`
      }
      case "BREAK": {
        return i18n.t("talk.Break")
      }
      case "CLOSING_TALK": {
        return i18n.t("talk.closing talk")
      }
      case "AFTER_PARTY": {
        return i18n.t("talk.party")
      }
      case "TALK": {
        return enOrJa(talk.title, talk.titleJa) || "TBA"
      }
      default:
        throw new Error(`Unrecognized kind: ${talk.kind}`)
    }
  }

  return (
    <Layout>
      <ResponsiveBox>
        <Breadcrumb path={[t("schedule")]} />
        <Title>{t("schedule")}</Title>

        {days.map(day => {
          const { startsAt, endsAt } = times[day]
          const sessions = flatten(
            timetable[day].map(({ sessions }) => sessions),
          )
          return (
            <React.Fragment key={day}>
              <SubTitle id={day}>
                {dateTimeFormatter.format(times[day].startsAt)}
              </SubTitle>
              <RoomLegendBox>
                <RoomLegend />
              </RoomLegendBox>
              <Grid starts-at={startsAt} ends-at={endsAt}>
                {sessions.map(s => {
                  const hasDescription =
                    s.uuid && (s.speakers.length || s.sponsors.length)

                  const location = s.sponsors.length
                    ? "on-site"
                    : s.speakers[0]?.location ?? "on-site"

                  return (
                    <Area
                      to={hasDescription ? `/talk/${s.uuid}` : null}
                      onClick={e => {
                        if (!hasDescription) {
                          e.preventDefault()
                        }
                      }}
                      key={s.track + s.startsAt + s.endsAt}
                      track={s.track}
                      starts-at={s.startsAt}
                      ends-at={s.endsAt}
                      $is-break={s.break || false}
                    >
                      <AreaTitle>
                        <EventTime session={s} />
                      </AreaTitle>
                      <Text>{getSessionName(s, sessions)}</Text>
                      <EventSpeakers session={s} />

                      <AreaFooter>
                        <Tags>
                          {s.spokenLanguage &&
                            t(`lang.${s.spokenLanguage || ""}`)}
                          {location === "remote" && t("location.remote")}
                        </Tags>
                      </AreaFooter>
                    </Area>
                  )
                })}
              </Grid>
            </React.Fragment>
          )
        })}
      </ResponsiveBox>
    </Layout>
  )
}

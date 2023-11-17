import React, { useLayoutEffect } from "react"
import styled from "styled-components"
import { useTranslation } from "react-i18next"
import { useStaticQuery, graphql } from "gatsby"
import { Link as _Link } from "gatsby-link"
import flatten from "lodash/flatten"

import { Layout } from "../components/Layout"
import { SEO } from "../components/Seo"
import { Title } from "../components/Title"
import { ResponsiveBox } from "../components/ResponsiveBox"
import { Breadcrumb } from "../components/Breadcrumb"
import { EventTime } from "../components/EventTime"
import { EventSpeakers } from "../components/EventSpeakers"
import { RoomLegend } from "../components/RoomLegend"
import { TalkType, SpeakerType } from "../data/types"
import { generateTimetable } from "../util/generateTimetable"
import { rangeTimeBoxes, escapeTime } from "../util/rangeTimeBoxes"
import { Dates, times, Rooms, rooms } from "../util/misc"
import { useEnOrJa } from "../util/languages"
import { rgba } from "../util/rgba"

const dummyTrack = String.fromCharCode(
  rooms[rooms.length - 1].charCodeAt(0) + 1,
) as Rooms
const Grid = styled.div<{ startsAt: Date; endsAt: Date }>`
  display: grid;
  grid-column-gap: 1em;
  grid-template-columns: ${rooms
    .concat(dummyTrack)
    .map(r => `[${r}]`)
    .join(" 1fr ")};
  grid-template-rows: ${({ startsAt, endsAt }) =>
    rangeTimeBoxes(5, startsAt.getHours(), endsAt.getHours())
      .map(t => `[t-${escapeTime(t)}]`)
      .join(" minmax(1em, max-content) ")};

  ${({ theme }) => theme.breakpoints.mobile} {
    display: flex;
    flex-direction: column;
  }
`
const Area = styled(_Link)<{
  track: Rooms
  startsAt: string
  endsAt: string
  isBreak: boolean
}>`
  margin-bottom: 1em;
  padding: 1em;
  text-decoration: none;
  position: relative;
  grid-column: ${({ track, isBreak }) =>
    isBreak ? `A / ${dummyTrack}` : track};
  grid-row: ${({ startsAt, endsAt }) =>
    `t-${escapeTime(startsAt)} / t-${escapeTime(endsAt)}`};
  background-color: ${({ track, isBreak, theme, to }) =>
    rgba(
      isBreak ? theme.colors.disabled : theme.colors[`room${track}`],
      to ? 1.0 : 0.4,
    )};
  border-left: 5px solid;
  border-color: ${({ track, isBreak, theme, to }) =>
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
    color: ${({ theme }) => theme.colors.base };
    font-size: 0.7em;
    position: absolute;
    top: -8px;
    left: -10px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 16px;
    height: 16px;
    border-radius: 100%;
    background-color: ${({ track, isBreak, theme }) =>
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

const TagList = styled.ul`
  display: flex;
  gap: 0.5rem;
  margin: 0;
  padding: 0;

  li {
    margin: 0;
    padding: 0;
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.header};
    font-size: 1.2rem;
    list-style: none;

    padding: 0.25em 0.5em 0.25em;
    margin: 0;

    background: rgba(255, 255, 255, 0.6);
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 0.5em;
  }
`

type TagsProps = {
  children: Array<string | null | false>
}
const Tags = ({ children }: TagsProps) => (
  <TagList>
    {children.filter(Boolean).map(text => (
      <li>{text}</li>
    ))}
  </TagList>
)

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
              title
              titleJa
              description
              descriptionJa
              spokenLanguage
              presenterName
              presenterNameReading
              slideLanguage
              speakerIDs
              sponsorIDs
              startsAt
              endsAt
              room
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

  return (
    <Layout>
      <SEO title={t("schedule")} description={t("schedule.description")} />
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
              <Grid startsAt={startsAt} endsAt={endsAt}>
                {sessions.map(s => {
                  const hasDescription =
                    s.uuid && (s.speakers.length || s.sponsors.length)

                  const location = s.sponsors.length
                    ? "on-site"
                    : s.speakers[0]?.location ?? "on-site"

                  const tKey = `talk.${s.title}`
                  const title = i18n.exists(tKey)
                    ? t(tKey)
                    : enOrJa(s.title, s.titleJa) || "TBA"

                  return (
                    <Area
                      // @ts-expect-error
                      to={hasDescription ? `/talk/${s.uuid}` : null}
                      onClick={e => {
                        if (!hasDescription) {
                          e.preventDefault()
                        }
                      }}
                      key={s.room + s.uuid}
                      track={s.room}
                      startsAt={s.startsAt}
                      endsAt={s.endsAt}
                      isBreak={s.break}
                    >
                      <AreaTitle>
                        <EventTime session={s} />
                      </AreaTitle>
                      <Text>{title}</Text>
                      <EventSpeakers session={s} byLine="by" />

                      <AreaFooter>
                        <Tags>
                          {s.spokenLanguage &&
                            t(`lang.${s.spokenLanguage || ""}`)}
                          {location === "remote" && t(`location.remote`)}
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

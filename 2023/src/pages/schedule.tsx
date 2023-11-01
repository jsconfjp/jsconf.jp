import React, { useLayoutEffect } from "react"
import styled from "styled-components"
import { useTranslation } from "react-i18next"
import { useStaticQuery, graphql } from "gatsby"
import { Link as _Link } from "gatsby-link"
import flatten from "lodash/flatten"
import { differenceInMinutes } from "date-fns"

import { Layout } from "../components/Layout"
import { SEO } from "../components/Seo"
import { Title } from "../components/Title"
import { ResponsiveBox } from "../components/ResponsiveBox"
import { Breadcrumb } from "../components/Breadcrumb"
import { RoomLegend } from "../components/RoomLegend"
import { TalkType, SpeakerType } from "../components/Speaker"
import { generateTimetable } from "../util/generateTimetable"
import { rangeTimeBoxes, escapeTime } from "../util/rangeTimeBoxes"
import { Dates, times, Rooms, rooms } from "../util/misc"
import { enOrJa } from "../util/languages"

function timeToDate(time: string): Date {
  const [h, m] = time.split(":")
  return new Date(2023, 10, 19, parseInt(h), parseInt(m))
}

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
  background-color: ${({ track, isBreak, theme }) =>
    isBreak ? theme.colors.disabled + "cc" : theme.colors[`room${track}`]};
  border-left: 5px solid;
  border-color: ${({ track, isBreak, theme }) =>
    isBreak ? theme.colors.disabledText : theme.colors[`room${track}Border`]};

  ::before {
    content: "";
    position: absolute;
    top: -8px;
    left: -10px;
    display: inline-block;
    width: 16px;
    height: 16px;
    border-radius: 100%;
    background-color: ${({ track, isBreak, theme }) =>
      isBreak ? theme.colors.disabledText : theme.colors[`room${track}Border`]};
  }

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
  font-size: 2rem;
  font-family: ${({ theme }) => theme.fonts.text};
`

const AreaTitle = styled.div`
  color: ${({ theme }) => theme.colors.text};
  ul {
    display: flex;
    padding-left: 0;
    margin: 0;
  }
  li#talkTime {
    font-size: 2rem;
    margin: 0 0.25em 0 0;
    list-style: none;
  }
  li#lengthOfSpokenTime {
    font-size: 1.5rem;
    list-style: none;

    padding: 0.25em 0.1em 0.1em;
    margin: 0 0 0 0.25em;
  }
`
const AreaFooter = styled.div`
  color: ${({ theme }) => theme.colors.text};
  ul {
    display: flex;
    padding-left: 0;
  }
  li#spokenLangage {
    background-color: #f0ffff;
    font-size: 1.2rem;
    list-style: none;

    padding: 0.25em 0.5em 0.25em;
    margin: 0;

    border-radius: 0.5em 0.5em 0.5em 0.5em;
    border-top: 1px solid #000000;
    border-bottom: 1px solid #000000;
    border-left: 1px solid #000000;
    border-right: 1px solid #000000;
  }
  li#speakerLocation {
    background-color: #f0ffff;
    font-size: 1.2rem;
    list-style: none;

    padding: 0.25em 0.5em 0.25em;
    margin: 0 0 0 0.25em;

    border-radius: 0.5em 0.5em 0.5em 0.5em;
    border-top: 1px solid #000000;
    border-bottom: 1px solid #000000;
    border-left: 1px solid #000000;
    border-right: 1px solid #000000;
  }
`

export default function SchedulePage() {
  const { t, i18n } = useTranslation()
  const { allSpeakersYaml, allSponsorsYaml, allTalksYaml } = useStaticQuery(
    graphql`
      query {
        allSpeakersYaml {
          edges {
            node {
              uuid
              name
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
              slideLanguage
              speakerIDs
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
                  const start = timeToDate(s.startsAt)
                  const end = timeToDate(s.endsAt)
                  const diff = differenceInMinutes(end, start)
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
                        <ul>
                          <li id="talkTime">
                            {s.startsAt}-{s.endsAt}
                          </li>
                          {diff > 0 && (
                            <li id="lengthOfSpokenTime">{`(${diff} min)`}</li>
                          )}
                        </ul>
                      </AreaTitle>

                      <Text>{enOrJa(i18n)(s.title, s.titleJa) || "TBA"}</Text>
                      {s.speakers.length ? (
                        <Text>
                          by{" "}
                          {s.speakers
                            .map(speaker => speaker.name)
                            .join(" and ")}
                        </Text>
                      ) : null}

                      <AreaFooter>
                        <ul>
                          {s.spokenLanguage != null ? (
                            <li id="spokenLangage">
                              { t("SpokenLang") + s.spokenLanguage || ""}
                            </li>
                          ) : (
                            ""
                          )}
                          {s.speakers.map(speaker => (speaker.location != "") ? (
                            <li id="speakerLocation">
                              {t("Location") + speaker.location}
                            </li>
                            ) : (
                              ""
                            )
                          )}
                        </ul>
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

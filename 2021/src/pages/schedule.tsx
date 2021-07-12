import React, { useLayoutEffect } from "react"
import styled from "styled-components"
import { useTranslation } from "react-i18next"
import { useStaticQuery, graphql } from "gatsby"
import _Link from "gatsby-link"
import flatten from "lodash/flatten"

import { Layout } from "../components/Layout"
import { SEO } from "../components/Seo"
import { Title } from "../components/Title"
import { SubTitle as _SubTitle } from "../components/SubTitle"
import { ResponsiveBox } from "../components/ResponsiveBox"
import { Breadcrumb } from "../components/Breadcrumb"
import { LinkButton } from "../components/LinkButton"
import { RoomLegend } from "../components/RoomLegend"
import { TalkType, SpeakerType } from "../components/Speaker"
import { generateTimetable } from "../util/generateTimetable"
import { rangeTimeBoxes, escapeTime } from "../util/rangeTimeBoxes"
import { Dates, times, Rooms, rooms } from "../util/misc"
import { enOrJa } from "../util/languages"

const Grid = styled.div<{ startsAt: Date; endsAt: Date }>`
  display: grid;
  grid-column-gap: 1em;
  grid-template-columns: ${rooms
    .concat("D" as Rooms)
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
  grid-column: ${({ track, isBreak }) => (isBreak ? "A / D" : track)};
  grid-row: ${({ startsAt, endsAt }) =>
    `t-${escapeTime(startsAt)} / t-${escapeTime(endsAt)}`};
  background-color: ${({ track, isBreak, theme }) =>
    // @ts-ignore Dynamic access
    isBreak ? theme.colors.disabled + "cc" : theme.colors[`room${track}`]};
  border-left: 5px solid;
  border-color: ${({ track, isBreak, theme }) =>
    // @ts-ignore Dynamic access
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
      // @ts-ignore Dynamic access
      isBreak ? theme.colors.disabledText : theme.colors[`room${track}Border`]};
  }

  ${({ theme }) => theme.breakpoints.mobile} {
    margin-bottom: 1em;
  }
`

const DaysButtonBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  ${({ theme }) => theme.breakpoints.mobile} {
    flex-direction: column;
  }
`
const SubTitle = styled(_SubTitle)`
  text-align: left;
  margin-top: 20px;
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

export default function SchedulePage() {
  const { t, i18n } = useTranslation()
  const { allSpeakersYaml, allTalksYaml } = useStaticQuery(graphql`
    query {
      allSpeakersYaml {
        edges {
          node {
            uuid
            name
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
  `)
  const speakers: SpeakerType[] = allSpeakersYaml.edges.map(
    ({ node }: any) => node
  )
  const talks: TalkType[] = allTalksYaml.edges.map(({ node }: any) => node)
  const timetable = generateTimetable({ speakers, talks })
  const days = Object.keys(times).sort() as Dates[]
  const dateTimeFormatter = new Intl.DateTimeFormat(i18n.language, {
    // @ts-ignore dateStyle' does not exist in type 'DateTimeFormatOptions'
    dateStyle: "medium"
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
      <SEO title={t("schedule")} description={t("schedule.description")} />{" "}
      <ResponsiveBox>
        <Breadcrumb path={[t("schedule")]} />
        <Title>{t("schedule")}</Title>
        <DaysButtonBox>
          <LinkButton color="secondary" size="large" to="/schedule/#day1">
            {t("day1")} ({dateTimeFormatter.format(times.day1.startsAt)})
          </LinkButton>
          <LinkButton color="secondary" size="large" to="/schedule/#day2">
            {t("day2")} ({dateTimeFormatter.format(times.day2.startsAt)})
          </LinkButton>
        </DaysButtonBox>

        {days.map(day => {
          const { startsAt, endsAt } = times[day]
          const sessions = flatten(
            timetable[day].map(({ sessions }) => sessions)
          )
          return (
            <React.Fragment key={day}>
              <SubTitle id={day}>
                {t(day)} ({dateTimeFormatter.format(times[day].startsAt)})
              </SubTitle>
              <RoomLegendBox>
                <RoomLegend />
              </RoomLegendBox>
              <Grid startsAt={startsAt} endsAt={endsAt}>
                {sessions.map(s => {
                  const hasDescription = s.uuid && s.speakers.length
                  return (
                    <Area
                      // @ts-ignore
                      to={hasDescription ? `talk/${s.uuid}` : null}
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
                      <Text>
                        {s.startsAt}-{s.endsAt}
                      </Text>
                      <Text>{enOrJa(i18n)(s.title, s.titleJa) || "TBA"}</Text>
                      {s.speakers.length ? (
                        <Text>
                          by{" "}
                          {s.speakers
                            .map(speaker => speaker.name)
                            .join(" and ")}
                        </Text>
                      ) : null}
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

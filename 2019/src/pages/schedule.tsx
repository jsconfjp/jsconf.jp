import React, { useLayoutEffect } from "react"
import styled from "styled-components"
import { useTranslation } from "react-i18next"
import { useStaticQuery, graphql } from "gatsby"
import _Link from "gatsby-link"

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
import { Dates, dates, Rooms } from "../util/misc"

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
const TimeBox = styled.div`
  display: grid;
  width: 100%;
  grid-template: "A B C" auto / 1fr 1fr 1fr;
  grid-column-gap: 40px;
  margin-bottom: 40px;

  ${({ theme }) => theme.breakpoints.mobile} {
    display: flex;
    flex-direction: column;
  }
`
const Link = styled(_Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text};
`
const Box = styled.div<{ area: Rooms; isBreak: boolean }>`
  grid-column: ${({ area }) => area};
  position: relative;
  width: 100%;
  box-sizing: border-box;
  padding: 1em;
  margin-bottom: 0.5em;
  background-color: ${({ area, isBreak, theme }) =>
    // @ts-ignore Dynamic access
    isBreak ? theme.colors.disabled : theme.colors[`room${area}`]};
  border-left: 5px solid;
  border-color: ${({ area, isBreak, theme }) =>
    // @ts-ignore Dynamic access
    isBreak ? theme.colors.disabledText : theme.colors[`room${area}Border`]};

  ::before {
    content: "";
    position: absolute;
    top: -8px;
    left: -10px;
    display: inline-block;
    width: 16px;
    height: 16px;
    border-radius: 100%;
    background-color: ${({ area, isBreak, theme }) =>
      // @ts-ignore Dynamic access
      isBreak ? theme.colors.disabledText : theme.colors[`room${area}Border`]};
  }
`
const Text = styled.span`
  display: block;
  font-size: 20px;
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
    ({ node }: any) => node,
  )
  const talks: TalkType[] = allTalksYaml.edges.map(({ node }: any) => node)
  const timetable = generateTimetable({ speakers, talks })
  const days = Object.keys(dates).sort() as Dates[]
  const enOrJa = (enStr: string, jaStr: string) => {
    return i18n.language === "en" ? enStr || jaStr : jaStr || enStr
  }
  const dateTimeFormatter = new Intl.DateTimeFormat(i18n.language, {
    // @ts-ignore dateStyle' does not exist in type 'DateTimeFormatOptions'
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
      <SEO title={t("schedule")} description={t("schedule.description")} />{" "}
      <ResponsiveBox>
        <Breadcrumb path={[t("schedule")]} />
        <Title>{t("schedule")}</Title>
        <DaysButtonBox>
          <LinkButton color="secondary" size="large" to="/schedule/#day1">
            {t("day1")} ({dateTimeFormatter.format(dates.day1)})
          </LinkButton>
          <LinkButton color="secondary" size="large" to="/schedule/#day2">
            {t("day2")} ({dateTimeFormatter.format(dates.day2)})
          </LinkButton>
        </DaysButtonBox>

        {days.map(day => (
          <React.Fragment key={day}>
            <SubTitle id={day}>
              {t(day)} ({dateTimeFormatter.format(dates[day])})
            </SubTitle>
            <RoomLegendBox>
              <RoomLegend />
            </RoomLegendBox>
            {timetable[day].map(({ timebox, sessions }) => (
              <TimeBox key={timebox}>
                {sessions.map(s => {
                  const content = (
                    <Box key={s.room + s.uuid} area={s.room} isBreak={s.break}>
                      <Text>
                        {s.startsAt}-{s.endsAt}
                      </Text>
                      <Text>{enOrJa(s.title, s.titleJa) || "TBA"}</Text>
                      {s.speakers.length ? (
                        <Text>
                          by{" "}
                          {s.speakers
                            .map(speaker => speaker.name)
                            .join(" and ")}
                        </Text>
                      ) : null}
                    </Box>
                  )
                  if (s.uuid && s.speakers.length) {
                    return <Link to={`talk/${s.uuid}`}>{content}</Link>
                  }
                  return content
                })}
              </TimeBox>
            ))}
          </React.Fragment>
        ))}
      </ResponsiveBox>
    </Layout>
  )
}

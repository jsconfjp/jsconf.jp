import React from "react"
import styled from "styled-components"
import { useTranslation } from "react-i18next"

import { Layout } from "../components/Layout"
import { SEO } from "../components/Seo"
import { Title } from "../components/Title"
import { SubTitle as _SubTitle } from "../components/SubTitle"
import { ResponsiveBox } from "../components/ResponsiveBox"
import { Breadcrumb } from "../components/Breadcrumb"
import { LinkButton } from "../components/LinkButton"
import { SmoothScroll } from "../components/SmoothScroll"

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
const TimeBox = styled.div`
  display: grid;
  width: 100%;
  grid-template: "A B" auto / 1fr 1fr;
  grid-column-gap: 40px;
  margin-bottom: 40px;

  ${({ theme }) => theme.breakpoints.mobile} {
    display: flex;
    flex-direction: column;
  }
`
const Box = styled.div<{ area: string; isBreak: boolean }>`
  grid-column: ${({ area }) => area};
  position: relative;
  width: 100%;
  box-sizing: border-box;
  padding: 1em;
  background-color: ${({ area, isBreak, theme }) =>
    isBreak
      ? theme.colors.disabled
      : area === "A"
      ? theme.colors.roomA
      : theme.colors.roomB};
  border-left: 5px solid;
  border-color: ${({ area, isBreak, theme }) =>
    isBreak
      ? theme.colors.disabledText
      : area === "A"
      ? theme.colors.roomABorder
      : theme.colors.roomBBorder};

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
      isBreak
        ? theme.colors.disabledText
        : area === "A"
        ? theme.colors.roomABorder
        : theme.colors.roomBBorder};
  }
`
const Text = styled.span`
  display: block;
  font-size: 20px;
  font-family: ${({ theme }) => theme.fonts.text};
`

export default function SchedulePage() {
  const { t } = useTranslation()

  const mockData = [
    {
      timebox: "10:00-10:30",
      items: [
        {
          break: false,
          room: "A",
          label: "Doors open",
        },
      ],
    },
    {
      timebox: "10:30-10:45",
      items: [
        {
          break: false,
          room: "A",
          label: "Keynote",
        },
      ],
    },
    {
      timebox: "10:45-11:15",
      items: [
        {
          break: false,
          room: "A",
          label: "Offline-First Collaborative Data Structures By Mathias Buus",
        },
        {
          break: false,
          room: "B",
          label:
            "Let's start machine learning with JavaScript By Shuhei Kitsuka",
        },
      ],
    },
    {
      timebox: "11:15-11:30",
      items: [
        {
          break: true,
          room: "A",
          label: "Break",
        },
        {
          break: true,
          room: "B",
          label: "Break",
        },
      ],
    },
  ]
  const timetable = {
    day1: mockData,
    day2: mockData,
  }

  return (
    <Layout>
      <SEO title={t("schedule")} description={t("schedule.description")} />{" "}
      <ResponsiveBox>
        <Breadcrumb path={[t("schedule")]} />
        <Title>{t("schedule")}</Title>
        <DaysButtonBox>
          <SmoothScroll selector="#day1">
            <LinkButton color="secondary" size="large" to="/schedule#day1">
              {t("day1")}
            </LinkButton>
          </SmoothScroll>
          <SmoothScroll selector="#day2">
            <LinkButton color="secondary" size="large" to="/schedule#day2">
              {t("day2")}
            </LinkButton>
          </SmoothScroll>
        </DaysButtonBox>

        <SubTitle id="day1">{t("day1")}</SubTitle>
        {timetable.day1.map(item => (
          <TimeBox key={item.timebox}>
            {item.items.map(event => (
              <Box
                key={`${event.room}_${event.label}`}
                area={event.room}
                isBreak={event.break}
              >
                <Text>{item.timebox}</Text>
                <Text>{event.label}</Text>
              </Box>
            ))}
          </TimeBox>
        ))}

        <SubTitle id="day2">{t("day2")}</SubTitle>
        {timetable.day2.map(item => (
          <TimeBox key={item.timebox}>
            {item.items.map(event => (
              <Box
                key={`${event.room}_${event.label}`}
                area={event.room}
                isBreak={event.break}
              >
                <Text>{item.timebox}</Text>
                <Text>{event.label}</Text>
              </Box>
            ))}
          </TimeBox>
        ))}
      </ResponsiveBox>
    </Layout>
  )
}

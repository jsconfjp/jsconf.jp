import React from "react"
import styled from "styled-components"
import { useTranslation } from "react-i18next"
import { Rooms, rooms } from "../util/misc"
import { InlineLink } from "./InlineLink"

const Box = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  ${({ theme }) => theme.breakpoints.mobile} {
    flex-direction: column;
    align-items: flex-start;
    gap: 1em;
  }
`
const RoomBox = styled(InlineLink)<{ disabled: boolean }>`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  ${({ disabled }) => (disabled ? `opacity: 0.5;` : "")}
`
const Circle = styled.div<{ track: Rooms }>`
  width: 30px;
  height: 30px;
  border-radius: 30px;
  background-color: ${({ track, theme }) => theme.colors[`room${track}Border`]};
`
const Text = styled.span`
  flex: 1;
  margin-left: 10px;
  font-weight: bold;
  font-size: 1.8rem;
  font-family: ${({ theme }) => theme.fonts.text};
`
const SubText = styled.span`
  flex: 1;
  margin-left: 10px;
  font-size: 1.3rem;
  text-align: center;
  margin-top: -0.1rem;
  font-family: ${({ theme }) => theme.fonts.text};
`
const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
`

type RoomProps = {
  track: Rooms
  "selected-track"?: Rooms | undefined
}

export const Room = ({ track, "selected-track": selectedTrack }: RoomProps) => {
  const { t } = useTranslation()
  return (
    <RoomBox
      to={
        selectedTrack && selectedTrack === track
          ? "/schedule"
          : `/schedule/${track}`
      }
      disabled={!!selectedTrack && track != selectedTrack}
    >
      <Circle track={track} />
      <TextBox>
        <Text>{t(`room${track}`)}</Text>
        <SubText>{t(`room${track}Sub`)}</SubText>
      </TextBox>
    </RoomBox>
  )
}

export type RoomLegendProps = Pick<RoomProps, "selected-track">

export const RoomLegend = (props: RoomLegendProps) => (
  <Box>
    {rooms.map((track, i) => (
      <Room key={i} track={track} {...props} />
    ))}
  </Box>
)

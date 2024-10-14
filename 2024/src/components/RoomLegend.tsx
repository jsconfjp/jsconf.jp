import React, { KeyboardEvent } from "react"
import styled from "styled-components"
import { useTranslation } from "react-i18next"
import { Rooms, rooms } from "../util/misc"

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
const RoomBox = styled.div<{ onClick?: () => void; disabled: boolean }>`
  flex: 1;
  display: flex;
  font-size: 1rem;
  flex-direction: row;
  align-items: center;
  cursor: ${({ onClick }) => (onClick ? "pointer" : "hand")};
  ${({ disabled }) => (disabled ? `opacity: 0.5;` : "")}
  ${({ onClick }) => (onClick ? `user-select: none;` : "")}
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
  font-size: 2rem;
  font-family: ${({ theme }) => theme.fonts.text};
`

type RoomProps = {
  track: Rooms
  onClick?: (track: Rooms | undefined) => void
  selectedTrack?: Rooms | undefined
}

export const Room = ({ track, selectedTrack, onClick }: RoomProps) => {
  const { t } = useTranslation()
  const handle = onClick
    ? () => onClick(selectedTrack === track ? undefined : track)
    : undefined
  const keyDown = handle
    ? (e: KeyboardEvent) => {
        if (e.key === "Enter") {
          handle()
        }
      }
    : undefined
  return (
    <RoomBox
      onClick={handle}
      onKeyDown={keyDown}
      disabled={onClick && selectedTrack ? selectedTrack !== track : false}
      tabIndex={onClick ? 0 : -1}
    >
      <Circle track={track} />
      <Text>{t(`room${track}`)}</Text>
    </RoomBox>
  )
}

export type RoomLegendProps = Pick<RoomProps, "onClick" | "selectedTrack">

export const RoomLegend = (props: RoomLegendProps) => (
  <Box>
    {rooms.map((track, i) => (
      <Room key={i} track={track} {...props} />
    ))}
  </Box>
)

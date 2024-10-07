import React from "react"
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
const RoomBox = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
`
const Circle = styled.div<{ area: Rooms }>`
  width: 30px;
  height: 30px;
  border-radius: 30px;
  background-color: ${({ area, theme }) => theme.colors[`room${area}Border`]};
`
const Text = styled.span`
  flex: 1;
  margin-left: 10px;
  font-weight: bold;
  font-size: 2rem;
  font-family: ${({ theme }) => theme.fonts.text};
`

type RoomProps = {
  room: Rooms
}
export const Room = ({ room }: RoomProps) => {
  const { t } = useTranslation()
  return (
    <RoomBox key={room}>
      <Circle area={room} />
      <Text>{t(`room${room}`)}</Text>
    </RoomBox>
  )
}

export const RoomLegend = () => (
  <Box>
    {rooms.map((room, i) => (
      <Room key={i} room={room} />
    ))}
  </Box>
)

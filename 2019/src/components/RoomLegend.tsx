import React from "react"
import styled from "styled-components"
import { Rooms, rooms } from "../util/misc"

const Box = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`
const RoomBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
const Circle = styled.div<{ area: Rooms }>`
  width: 30px;
  height: 30px;
  border-radius: 30px;
  background-color: ${({ area, theme }) =>
    // @ts-ignore Dynamic access
    theme.colors[`room${area}Border`]};
`
const Text = styled.span`
  margin-left: 10px;
  font-weight: bold;
  font-size: 20px;
  font-family: ${({ theme }) => theme.fonts.text};
`

export function RoomLegend() {
  return (
    <Box>
      {rooms.map(room => (
        <RoomBox key={room}>
          <Circle area={room} />
          <Text>Room {room}</Text>
        </RoomBox>
      ))}
    </Box>
  )
}

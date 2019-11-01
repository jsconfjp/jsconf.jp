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
  }
`
const RoomBox = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;

  ${({ theme }) => theme.breakpoints.mobile} {
    margin-bottom: 1em;
  }
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
  flex: 1;
  margin-left: 10px;
  font-weight: bold;
  font-size: 20px;
  font-family: ${({ theme }) => theme.fonts.text};
`

export function RoomLegend() {
  const { t } = useTranslation()
  return (
    <Box>
      {rooms.map(room => (
        <RoomBox key={room}>
          <Circle area={room} />
          <Text>{t(`room${room}`)}</Text>
        </RoomBox>
      ))}
    </Box>
  )
}

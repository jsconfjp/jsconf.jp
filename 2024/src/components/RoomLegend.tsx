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
}
export const Room = ({ track }: RoomProps) => {
  const { t } = useTranslation()
  return (
    <RoomBox key={track}>
      <Circle area={track} />
      <TextBox>
        <Text>{t(`room${track}`)}</Text>
        <SubText>{t(`room${track}Sub`)}</SubText>
      </TextBox>
    </RoomBox>
  )
}

export const RoomLegend = () => (
  <Box>
    {rooms.map((track, i) => (
      <Room key={i} track={track} />
    ))}
  </Box>
)

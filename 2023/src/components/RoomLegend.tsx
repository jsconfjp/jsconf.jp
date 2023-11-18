import React, { KeyboardEvent } from "react"
import styled from "styled-components"
import { useTranslation } from "react-i18next"
import { Rooms } from "../util/misc"

export const RoomLegend = styled.div`
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
const RoomBox = styled.div<{ onClick?: () => void, disabled: boolean }>`
  flex: 1;
  display: flex;
  font-size: 1rem;
  flex-direction: row;
  align-items: center;
  cursor: ${({ onClick }) => onClick ? 'pointer' : 'hand'};
  ${({ disabled }) => disabled ? `opacity: 0.5;`: '' }
  ${({ onClick }) => onClick ? `user-select: none;` : ''}

  ${({ disabled }) => disabled ? `

  @media print {
    display: none;
    font-size: 0.5rem;
  }
  ` : ''}
`
const Circle = styled.div<{ area: Rooms }>`
  width: 2em;
  height: 2em;
  border-radius: 2em;
  background-color: ${({ area, theme }) => theme.colors[`room${area}Border`]};
  print-color-adjust: exact;
  -webkit-print-color-adjust: exact;
`
const Text = styled.span`
  flex: 1;
  margin-left: 10px;
  font-weight: bold;
  font-size: 2em;
  font-family: ${({ theme }) => theme.fonts.text};

  @media print {
    font-size: 3em;
  }
`

type RoomProps = {
  room: Rooms
  onClick?: (room: Rooms | undefined) => void
  selectedRoom?: Rooms | undefined
}

export const Room = ({ room, selectedRoom, onClick }: RoomProps) => {
  const { t } = useTranslation()
  const handle = onClick ? () => onClick(selectedRoom === room ? undefined : room) : undefined
  const keyDown = handle ? (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      handle()
    }
  } : undefined
  return (<RoomBox
      onClick={handle}
      onKeyDown={keyDown}
      disabled={onClick && selectedRoom ? selectedRoom !== room : false}
      tabIndex={onClick ? 0 : -1}
  >
    <Circle area={room} />
    <Text>{t(`room${room}`)}</Text>
  </RoomBox>
  )
}

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

const RoomBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 1em;

  ${({ theme }) => theme.breakpoints.mobile} {
    align-items: flex-start;
    gap: 0;
  }
`

const RoomBox = styled(InlineLink)<{ disabled: boolean }>`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;

  ${({ disabled }) =>
    disabled
      ? `
  opacity: 0.5;

  @media print {
    display: none;
    font-size: 0.5rem;
  }
  `
      : ""}
`
const Circle = styled.div<{ track: Rooms }>`
  width: 30px;
  height: 30px;
  border-radius: 30px;
  background-color: ${({ track, theme }) => theme.colors[`room${track}Border`]};

  @media print {
    print-color-adjust: exact;
    -webkit-print-color-adjust: exact;
    width: 2.5em;
    height: 2.5em;
    border-radius: 2.5em;
  }
`
const Text = styled.span`
  flex: 1;
  margin-left: 10px;
  font-weight: bold;
  font-size: 1.8rem;
  font-family: ${({ theme }) => theme.fonts.text};

  @media print {
    font-size: 2.5em;
  }
`
const SubText = styled.span`
  flex: 1;
  margin-left: 10px;
  font-size: 1.3rem;
  text-align: center;
  margin-top: -0.1rem;
  font-family: ${({ theme }) => theme.fonts.text};
`

const StreamLink = styled.a<{ track: Rooms }>`
  display: block;
  font-size: 1.6rem;
  margin-top: 1rem;
  text-align: left;
  font-family: ${({ theme }) => theme.fonts.text};

  color: ${({ theme }) => theme.colors.text};
  text-decoration-color: ${({ track, theme }) =>
    theme.colors[`room${track}Border`]};

  &:hover {
    color: ${({ track, theme }) => theme.colors[`room${track}Border`]};
  }

  @media print {
    display: none;
  }
`

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
`

type RoomProps = {
  track: Rooms
  "selected-track"?: Rooms | undefined
}

export const Room = ({ track, "selected-track": selectedTrack }: RoomProps) => {
  function getTrackLink(track: Rooms) {
    switch (track) {
      case "A":
        return "https://youtube.com/live/ew1zmA7y9q8"
      case "B":
        return "https://youtube.com/live/2BXwigWGjWQ"
      case "C":
        return "https://youtube.com/live/E3yTtaGr7V8"
      case "D":
        return "https://youtube.com/live/5Wt0r5vHOwQ"
    }
  }

  const { t } = useTranslation()
  return (
    <RoomBoxContainer>
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
          <SubText></SubText>
        </TextBox>
      </RoomBox>

      <StreamLink track={track} href={getTrackLink(track)} target="_blank">
        {t("viewStream")}
      </StreamLink>
    </RoomBoxContainer>
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


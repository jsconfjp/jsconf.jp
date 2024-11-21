import React from "react"
import styled from "styled-components"
import { useTranslation } from "react-i18next"

import venueMap from "../images/venue-map.svg"
import venueMapJa from "../images/venue-map-ja.svg"

type Props = {
  width: number
  height: number
}

const MapContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  margin-top: 30px;
`

const Img = styled.img`
  width: 100%;
  max-width: 940px;

  height: 100%;
`

export const VenueMap = ({ width, height }: Props) => {
  const { t, i18n } = useTranslation()

  console.log(i18n.language)

  return (
    <MapContainer>
      <Img
        width={width}
        height={height}
        src={i18n.language === "ja" ? venueMapJa : venueMap}
        alt={t("venue.map")}
      />
    </MapContainer>
  )
}


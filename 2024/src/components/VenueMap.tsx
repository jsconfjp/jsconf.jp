import React from "react"
import styled from "styled-components"
import { useTranslation } from "react-i18next"

import venueMap from "../images/venue-map.svg"

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

export const VenueMap = ({ width, height }: Props) => {
  const { t } = useTranslation()

  return (
    <MapContainer>
      <img width={width} height={height} src={venueMap} alt={t("venue.map")} />
    </MapContainer>
  )
}


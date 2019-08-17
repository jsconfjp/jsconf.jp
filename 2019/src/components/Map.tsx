import React from "react"
import styled from "styled-components"

type Props = {
  width: number
  height: number
}

const Iframe = styled.iframe`
  border: 0;
  max-width: 100%;
`

export function Map(props: Props) {
  const { width, height } = props
  return (
    <Iframe
      width={width}
      height={height}
      src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ6Xx_rh-MGGAR3sDINOeBYw8&key=AIzaSyAhtEqpuBA3ChFU30d4A1bSODO-anJ54Vo"
      frameBorder="0"
      allowFullScreen
    />
  )
}

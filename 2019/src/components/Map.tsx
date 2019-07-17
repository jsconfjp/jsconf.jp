import React from "react"

type Props = {
  width: number
  height: number
}

export function Map(props: Props) {
  const { width, height } = props
  return (
    <iframe
      width={width}
      height={height}
      style={{ border: 0 }}
      src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ6Xx_rh-MGGAR3sDINOeBYw8&key=AIzaSyAhtEqpuBA3ChFU30d4A1bSODO-anJ54Vo"
      frameBorder="0"
      allowFullScreen
    />
  )
}

import React from "react"
import { useTranslation } from "react-i18next"
import styled from "styled-components"

type Props = {
  width: number
  height: number
  title: string | null
}

const Iframe = styled.iframe`
  border: 0;
  max-width: 100%;
`

export function Map(props: Props) {
  const { i18n } = useTranslation()
  const { width, height, title } = props
  return (
    <Iframe
      width={width}
      height={height}
      src={`https://www.google.com/maps/embed/v1/place?q=place_id:ChIJxe2InfyLGGARY7lD5QxJ2fg&key=AIzaSyAhtEqpuBA3ChFU30d4A1bSODO-anJ54Vo&language=${i18n.language}`}
      frameBorder="0"
      allowFullScreen
      title={title ?? undefined}
    />
  )
}

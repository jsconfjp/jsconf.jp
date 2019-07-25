import React from "react"
import styled from "styled-components"

const Box = styled.a`
  border: 1px solid ${({ theme }) => theme.colors.border};
  font-size: 0;
`

export type Props = {
  grade: "platinum" | "gold" | "silver" | "bronze"
  logoUrl: string
  url: string
}

export function Sponsor(props: Props) {
  const { logoUrl, url } = props

  return (
    <Box href={url} target="_blank">
      <img src={logoUrl} width="100%" />
    </Box>
  )
}

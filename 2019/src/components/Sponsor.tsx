import React from "react"
import styled from "styled-components"

const Box = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.base};
  font-size: 0;
`
const Img = styled.img`
  padding: 20px;
  object-fit: contain;
  box-sizing: border-box;

  &.platinum {
    width: 780px;
    height: 200px;
  }
  &.gold {
    width: 440px;
    height: 125px;
  }
  &.silver,
  &.bronze {
    width: 273px;
    height: 97px;
  }
`

export type Props = {
  grade: "platinum" | "gold" | "silver" | "bronze"
  logoUrl: string
  url: string
}

export function Sponsor(props: Props) {
  const { logoUrl, url, grade } = props

  return (
    <Box href={url} target="_blank">
      <Img src={logoUrl} width="100%" className={grade} />
    </Box>
  )
}

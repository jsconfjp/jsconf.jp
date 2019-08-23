import React from "react"
import styled from "styled-components"
import { OutboundLink } from "gatsby-plugin-google-analytics"

const Box = styled(OutboundLink)`
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
  width: 100%;

  &.platinum {
    width: 780px;
    height: 200px;

    ${({ theme }) => theme.breakpoints.mobile} {
      width: 100%;
      max-width: 780px;
      max-height: 160px;
    }
  }
  &.gold {
    width: 100%;
    max-width: 440px;
    max-height: 125px;
  }
  &.silver,
  &.bronze {
    width: 100%;
    max-width: 273px;
    max-height: 97px;
  }

  ${({ theme }) => theme.breakpoints.mobile} {
    padding: 10px;

    &.bronze {
      width: 100%;
      max-width: 273px;
      max-height: 40px;
    }
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

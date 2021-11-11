import React from "react"
import styled from "styled-components"
import { OutboundLink } from "gatsby-plugin-google-analytics"

const Box = styled(OutboundLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.base};
  font-size: 0;
`
const Text = styled.p`
  font-family: ${({ theme }) => theme.fonts.text};
  font-size: 1.4rem;
`
const Img = styled.img`
  padding: 20px;
  object-fit: contain;
  box-sizing: border-box;
  width: 100%;

  &.premium {
    width: 780px;
    height: 200px;

    ${({ theme }) => theme.breakpoints.mobile} {
      width: 100%;
      max-width: 780px;
      max-height: 160px;
    }
  }
  &.sponsor {
    width: 100%;
    max-width: 440px;
    max-height: 125px;
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
  grade: "premium" | "sponsor"
  logoUrl: string
  name: string
  url: string
  prText: string
  showPrText: boolean
}

export function Sponsor(props: Props) {
  const { logoUrl, url, grade, name, prText, showPrText } = props

  return (
    <div>
      <Box href={url} target="_blank">
        <Img
          src={logoUrl}
          width="100%"
          className={grade}
          alt={name}
          title={prText}
        />
      </Box>
      {showPrText ? <Text>{prText}</Text> : null}
    </div>
  )
}

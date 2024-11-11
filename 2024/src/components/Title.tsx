import React from "react"
import styled from "styled-components"

export type Props = {
  children: React.ReactNode
  heading?: "h1" | "h2"
}

const H1 = styled.h1`
  text-align: center;
  margin: 40px 0 60px;
  font-size: ${({ theme }) => theme.fontSizes.title};
  text-transform: none;
  font-family: ${({ theme }) => theme.fonts.header};

  @media print {
    display: none;
  }
`

const H2 = styled.h2`
  text-align: center;
  margin: 40px 0 60px;
  font-size: ${({ theme }) => theme.fontSizes.title};
  text-transform: none;
  font-family: ${({ theme }) => theme.fonts.header};

  @media print {
    display: none;
  }
`

export function Title(props: Props) {
  const { children, heading = "h1" } = props

  return heading === "h1" ? <H1>{children}</H1> : <H2>{children}</H2>
}

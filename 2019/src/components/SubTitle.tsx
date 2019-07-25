import React from "react"
import styled from "styled-components"

export type Props = {
  children: React.ReactNode
}

const Box = styled.h2`
  text-align: center;
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.fonts.header};
  font-size: 40px;
  margin: 0 0 1em;
`

export function SubTitle(props: Props) {
  const { children } = props

  return <Box>{children}</Box>
}

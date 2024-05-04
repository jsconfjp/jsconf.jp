import React from "react"
import styled from "styled-components"

export type Props = {
  children: React.ReactNode
}

const Box = styled.h1`
  text-align: center;
  margin: 40px 0 60px;
  font-size: ${({ theme }) => theme.fontSizes.title};
  text-transform: none;
  font-family: ${({ theme }) => theme.fonts.header};
`

export function Title(props: Props) {
  const { children } = props

  return <Box>{children}</Box>
}

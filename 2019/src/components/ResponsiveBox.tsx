import React from "react"
import styled from "styled-components"

export type Props = {
  children: React.ReactNode
}

const Box = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.innerWidth};
  padding: 2em 1em 5em;
  margin: 0 auto;
  box-sizing: border-box;
`

export function ResponsiveBox(props: Props) {
  const { children } = props

  return <Box>{children}</Box>
}

import React from "react"
import styled from "styled-components"

export type Props = {
  children: React.ReactNode
}

const Box = styled.div`
  width: ${({ theme }) => theme.innerWidth};
  padding: 40px 0 100px;
  margin: 0 auto;
`

export function ResponsiveBox(props: Props) {
  const { children } = props

  return <Box>{children}</Box>
}

import React from "react"
import styled from "styled-components"

const Box = styled.div`
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.2);
  background-color: ${({ theme }) => theme.colors.base};
`

export type Props = {
  children: React.ReactNode
}

export function Card(props: Props) {
  const { children } = props

  return <Box>{children}</Box>
}

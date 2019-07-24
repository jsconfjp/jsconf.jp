import React from "react"
import styled from "styled-components"

const Box = styled.div`
  padding: 70px;
  box-shadow: 0px 3px 10px ${({ theme }) => theme.colors.shadow};
  background-color: ${({ theme }) => theme.colors.base};
`

export type Props = {
  children: React.ReactNode
}

export function Card(props: Props) {
  const { children } = props

  return <Box>{children}</Box>
}

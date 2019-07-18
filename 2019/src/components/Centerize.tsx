import React from "react"
import styled from "styled-components"

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export type Props = {
  children: React.ReactNode
}

export function Centerize(props: Props) {
  const { children } = props

  return <Box>{children}</Box>
}

import React from "react"
import styled from "styled-components"

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const ResponsiveBox = styled.div`
  max-width: 1200px;
`

export type Props = {
  children: React.ReactNode
}

export function Centerize(props: Props) {
  const { children } = props

  return (
    <Box>
      <ResponsiveBox>{children}</ResponsiveBox>
    </Box>
  )
}

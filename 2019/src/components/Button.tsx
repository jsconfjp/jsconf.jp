import React from "react"
import styled from "styled-components"

const Box = styled.div`
  cursor: pointer;
  display: inline-block;
  color: white;
  background-color: lightgray;
  padding: 10px 20px;
`
const PrimaryBox = styled(Box)`
  background-color: ${({ theme }) => theme.colors.primary};
`
const SecondaryBox = styled(Box)`
  background-color: ${({ theme }) => theme.colors.secondary};
`

export type Props = {
  theme: "primary" | "secondary"
  children: React.ReactNode
  onClick: () => void
}

export function Button(props: Props) {
  const { theme, children, onClick } = props

  if (theme === "primary") {
    return <PrimaryBox onClick={onClick}>{children}</PrimaryBox>
  } else if (theme === "secondary") {
    return <SecondaryBox onClick={onClick}>{children}</SecondaryBox>
  } else {
    return <Box onClick={onClick}>{children}</Box>
  }
}

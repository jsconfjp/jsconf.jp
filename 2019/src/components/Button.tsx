import React from "react"
import styled from "styled-components"

const Box = styled.div`
  cursor: pointer;
  display: inline-block;
  font-family: ${({ theme }) => theme.fonts.header};
  padding: 10px 24px;
`
const PrimaryBox = styled(Box)`
  color: white;
  background-color: ${({ theme }) => theme.colors.primary};
`
const SecondaryBox = styled(Box)`
  color: white;
  background-color: ${({ theme }) => theme.colors.secondary};
`

export type Props = {
  color: "primary" | "secondary"
  children: React.ReactNode
  onClick: () => void
}

export function Button(props: Props) {
  const { color, children, onClick } = props

  if (color === "primary") {
    return <PrimaryBox onClick={onClick}>{children}</PrimaryBox>
  } else if (color === "secondary") {
    return <SecondaryBox onClick={onClick}>{children}</SecondaryBox>
  } else {
    return <Box onClick={onClick}>{children}</Box>
  }
}

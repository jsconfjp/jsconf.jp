import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const InternalBox = styled(Link)`
  cursor: pointer;
  background-color: lightgray;
  color: white;
  display: inline-block;
  text-decoration: none;
  padding: 10px 20px;
`
const InternalPrimaryBox = styled(InternalBox)`
  background-color: ${({ theme }) => theme.colors.primary};
`
const InternalSecondaryBox = styled(InternalBox)`
  background-color: ${({ theme }) => theme.colors.secondary};
`

const ExternalBox = styled.a`
  cursor: pointer;
  background-color: lightgray;
  color: white;
  display: inline-block;
  text-decoration: none;
  padding: 10px 20px;
`
const ExternalPrimaryBox = styled(ExternalBox)`
  background-color: ${({ theme }) => theme.colors.primary};
`
const ExternalSecondaryBox = styled(ExternalBox)`
  background-color: ${({ theme }) => theme.colors.secondary};
`

export type Props = {
  color: "primary" | "secondary"
  to: string
  children: React.ReactNode
}

export function LinkButton(props: Props) {
  const { color, to, children } = props

  if (to.startsWith("/")) {
    if (color === "primary") {
      return <InternalPrimaryBox to={to}>{children}</InternalPrimaryBox>
    } else if (color === "secondary") {
      return <InternalSecondaryBox to={to}>{children}</InternalSecondaryBox>
    } else {
      return <InternalBox to={to}>{children}</InternalBox>
    }
  }

  if (color === "primary") {
    return (
      <ExternalPrimaryBox href={to} target="_blank">
        {children}
      </ExternalPrimaryBox>
    )
  } else if (color === "secondary") {
    return (
      <ExternalSecondaryBox href={to} target="_blank">
        {children}
      </ExternalSecondaryBox>
    )
  } else {
    return (
      <ExternalBox href={to} target="_blank">
        {children}
      </ExternalBox>
    )
  }
}

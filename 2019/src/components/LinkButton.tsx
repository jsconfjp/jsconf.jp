import React from "react"
import styled, { css } from "styled-components"
import { Link } from "gatsby"

const buttonStyle = css`
  display: flex;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.disabled};
  color: white;
  font-family: ${({ theme }) => theme.fonts.header};
  font-weight: bold;
  align-items: center;
  justify-content: center;

  &.large {
    width: 440px;
    padding: 1.4em 0;
    font-size: 24px;
  }
  &.normal {
    width: 440px;
    padding: 0.6em 0;
    font-size: 24px;
  }
  &.small {
    font-size: 20px;
  }
`

const InternalBox = styled(Link)`
  ${buttonStyle}
  text-decoration: none;
`
const InternalPrimaryBox = styled(InternalBox)`
  background-color: ${({ theme }) => theme.colors.primary};
`
const InternalSecondaryBox = styled(InternalBox)`
  background-color: ${({ theme }) => theme.colors.secondary};
`

const ExternalBox = styled.a`
  ${buttonStyle}
  text-decoration: none;
`
const ExternalPrimaryBox = styled(ExternalBox)`
  background-color: ${({ theme }) => theme.colors.primary};
`
const ExternalSecondaryBox = styled(ExternalBox)`
  background-color: ${({ theme }) => theme.colors.secondary};
`

export type Props = {
  color: "primary" | "secondary"
  size: "inline" | "normal" | "large"
  to: string
  disabled: boolean
  children: React.ReactNode
}

export function LinkButton(props: Props) {
  const { color, to, size, children } = props

  if (to.startsWith("/")) {
    if (color === "primary") {
      return (
        <InternalPrimaryBox className={size} to={to}>
          {children}
        </InternalPrimaryBox>
      )
    } else if (color === "secondary") {
      return (
        <InternalSecondaryBox className={size} to={to}>
          {children}
        </InternalSecondaryBox>
      )
    } else {
      return (
        <InternalBox className={size} to={to}>
          {children}
        </InternalBox>
      )
    }
  }

  if (color === "primary") {
    return (
      <ExternalPrimaryBox href={to} target="_blank" className={size}>
        {children}
      </ExternalPrimaryBox>
    )
  } else if (color === "secondary") {
    return (
      <ExternalSecondaryBox href={to} target="_blank" className={size}>
        {children}
      </ExternalSecondaryBox>
    )
  } else {
    return (
      <ExternalBox href={to} target="_blank" className={size}>
        {children}
      </ExternalBox>
    )
  }
}

LinkButton.defaultProps = {
  disabled: false,
  size: "normal",
}

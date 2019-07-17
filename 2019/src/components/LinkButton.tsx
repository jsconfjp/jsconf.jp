import React from "react"
import { Link } from "gatsby"

export type Props = {
  theme: "primary" | "secondary"
  to?: string
  children: React.ReactNode
}

export function LinkButton(props: Props) {
  const { theme, to, children } = props

  if (to) {
    if (to.startsWith("/")) {
      return <Link to={to}>{children}</Link>
    }

    return (
      <a href={to} target="_blank">
        {children}
      </a>
    )
  }

  return <div>{children}</div>
}

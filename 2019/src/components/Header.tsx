import { Link } from "gatsby"
import React from "react"

type Props = {
  siteTitle: string
}

export function Header(props: Props) {
  const { siteTitle } = props

  return (
    <header>
      <h1>
        <Link to="/">{siteTitle}</Link>
      </h1>
    </header>
  )
}

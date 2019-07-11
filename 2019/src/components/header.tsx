import { Link } from "gatsby"
import React from "react"

type Props = {
  siteTitle: string
}

const Header = ({ siteTitle }: Props) => (
  <header>
    <h1>
      <Link to="/">{siteTitle}</Link>
    </h1>
  </header>
)

export default Header

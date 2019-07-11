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

      <Link to="speakers">Speakers</Link>
      <span>/</span>
      <Link to="venue">Venue</Link>
      <span>/</span>
      <Link to="schedule">Schedule</Link>
      <span>/</span>
      <Link to="timetable">Timetable</Link>
      <span>/</span>
      <Link to="sponsors">Sponsors</Link>
      <span>/</span>
      <Link to="about">About</Link>
    </header>
  )
}

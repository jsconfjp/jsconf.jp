import React from "react"

export type Props = {
  grade: "platinum" | "gold" | "silver" | "bronze"
  logoUrl: string
  url: string
}

export function Sponsor(props: Props) {
  const { logoUrl, url } = props

  return (
    <a href={url} target="_blank">
      <img src={logoUrl || "https://example.com"} />
    </a>
  )
}

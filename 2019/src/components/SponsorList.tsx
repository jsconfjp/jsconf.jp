import React from "react"
import { Sponsor, Props as SponsorType } from "./Sponsor"

export type Props = {
  sponsors: SponsorType[]
}

export function SponsorList(props: Props) {
  const { sponsors } = props

  return (
    <>
      {sponsors.map(sponsor => (
        <Sponsor
          key={sponsor.logoUrl}
          logoUrl={sponsor.logoUrl}
          url={sponsor.url}
        />
      ))}
    </>
  )
}

import React from "react"

type Props = {
  url: string
  avatar: string
  name: string
}

export function Member(props: Props) {
  return (
    <div>
      <a href={props.url} target="_blank" rel="noopener">
        <img width="100%" loading="lazy" src={`${props.avatar}?size=160`} />
        <span>{props.name}</span>
      </a>
    </div>
  )
}

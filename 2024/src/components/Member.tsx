import React from "react"
import styled from "styled-components"

type Props = {
  url: string
  avatar: string
  name: string
}

const MemberName = styled.span`
  font-family: ${({ theme }) => theme.fonts.text};
`

export function Member(props: Props) {
  return (
    <div>
      <a href={props.url} target="_blank" rel="noopener">
        <img
          width="100%"
          loading="lazy"
          alt={props.name}
          src={`${props.avatar}?size=160`}
        />
        <MemberName>{props.name}</MemberName>
      </a>
    </div>
  )
}

import React from "react"
import styled from "styled-components"
import { Logo } from "./Logo"

type Props = {
  title: string
  subTitle: string
  description: string
}

const Box = styled.div`
  display: flex;
  margin-top: 120px;
  margin-bottom: 100px;
`

export function Hero(props: Props) {
  const { title, subTitle, description } = props

  return (
    <Box>
      <Logo />
      <div style={{ flex: 1 }}>
        <h1>{title}</h1>
        <h2>{subTitle}</h2>
        <p>{description}</p>
      </div>
    </Box>
  )
}

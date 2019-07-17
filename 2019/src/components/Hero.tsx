import React from "react"
import { Logo } from "./Logo"

type Props = {
  title: string
  subTitle: string
  description: string
}

export function Hero(props: Props) {
  const { title, subTitle, description } = props

  return (
    <>
      <Logo />
      <h1>{title}</h1>
      <h2>{subTitle}</h2>
      <p>{description}</p>
    </>
  )
}

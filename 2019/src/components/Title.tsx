import React from "react"

export type Props = {
  children: React.ReactNode
}

export function Title(props: Props) {
  const { children } = props

  return <h1 style={{ textTransform: "uppercase" }}>{children}</h1>
}

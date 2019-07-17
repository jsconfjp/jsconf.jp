import React from "react"

export type Props = {
  theme: "primary" | "secondary"
  children: React.ReactNode
  onClick: () => void
}

export function Button(props: Props) {
  const { theme, children, onClick } = props

  return <button onClick={onClick}>{children}</button>
}

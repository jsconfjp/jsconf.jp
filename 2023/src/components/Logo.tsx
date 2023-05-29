import React from "react"
import logo from "../images/logo.svg"

type Props = {
  alt?: string
  size: number
}

export function Logo(props: Props) {
  const { alt, size } = props

  return <img width={size} height={size} src={logo} alt={alt} />
}

Logo.defaultProps = {
  size: 125,
}

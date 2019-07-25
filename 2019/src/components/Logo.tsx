import React from "react"
import logo from "../images/logo.svg"

type Props = {
  size: number
}

export function Logo(props: Props) {
  const { size } = props

  return <img style={{ width: size, height: size }} src={logo} />
}

Logo.defaultProps = {
  size: 125,
}

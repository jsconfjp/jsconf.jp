import React from "react"
import logo from "../images/logo.svg"

type Props = {
  size: number
}

export function Logo(props: Props) {
  const { size } = props

  return <img width={size} height={size} src={logo} alt="JSConf JP" />
}

Logo.defaultProps = {
  size: 125,
}

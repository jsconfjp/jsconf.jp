import React from "react"
import logo from "../images/logo.svg"

type Props = {
  size?: number
}

export const Logo = (props: Props) => {
  const size = props.size ?? 125

  return <img width={size} height={size} src={logo} alt="JSConf JP" />
}

import React from "react"
import logo2024 from "../images/logo2024.png"

type Props = {
  size?: number
}

export const Logo2024 = (props: Props) => {
  const size = props.size ?? 125

  return <img width={size} height={size} src={logo2024} alt="JSConf JP 2024" />
}

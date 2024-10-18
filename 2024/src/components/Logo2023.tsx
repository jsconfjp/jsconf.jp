import React from "react"
import logo2023 from "../images/logo-2023.png"

type Props = {
  size?: number
}

export const Logo2023 = (props: Props) => {
  const size = props.size ?? 125

  return <img width={size} height={size} src={logo2023} alt="JSConf JP 2023" />
}

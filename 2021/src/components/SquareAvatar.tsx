import React, { useLayoutEffect, useState, useRef } from "react"
import styled from "styled-components"

export type Props = {
  src: string
}

const Avatar = styled.img`
  width: 100%;
  object-fit: cover;
`

export function SquareAvatar(props: Props) {
  const { src } = props
  const ref = useRef<HTMLImageElement>(null)
  const [width, setWidth] = useState<string | number>("auto")
  useLayoutEffect(() => {
    return () => {
      const { width } = ref.current!.getBoundingClientRect()
      setWidth(width)
    }
  }, [ref])

  return <Avatar src={src} width="100%" height={width} ref={ref} />
}

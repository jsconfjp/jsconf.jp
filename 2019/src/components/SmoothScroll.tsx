import React, { cloneElement, useCallback } from "react"

type Props = {
  selector: string
  children: React.ReactElement
}

export function SmoothScroll(props: Props) {
  const { selector, children } = props
  const handleClick = useCallback(
    e => {
      const el = document.querySelector(selector)
      if (!el) {
        throw new Error(`Element not found with selector: ${selector}`)
      }

      const { top } = el.getBoundingClientRect()
      e.preventDefault()
      window.scrollTo({ top, behavior: "smooth" })
    },
    [selector],
  )

  return cloneElement(children, {
    onClick: handleClick,
  })
}

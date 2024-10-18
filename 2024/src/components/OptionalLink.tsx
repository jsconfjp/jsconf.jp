import React, { forwardRef } from "react"
import { Link, GatsbyLinkProps } from "gatsby"

export type OptionalLinkProps<TState> = Omit<
  GatsbyLinkProps<TState>,
  "to" | "align"
> & {
  to?: string | null
}
export const OptionalLink = forwardRef<
  HTMLAnchorElement,
  OptionalLinkProps<any>
>((props, ref) => {
  const { to, ...rest } = props
  return to ? (
    <Link ref={ref as any} to={to} {...rest} />
  ) : (
    <a ref={ref as any} {...rest} />
  )
})

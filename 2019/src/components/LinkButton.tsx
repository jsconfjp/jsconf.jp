import React from "react"
import { Link } from 'gatsby'

export type Props = {
    theme: 'primary' | 'secondary',
    to: string,
    children: React.ReactNode
}

export function LinkButton(props: Props) {
    const { theme, to, children } = props

    return (
        <Link to={to}>{children}</Link>
    )
}

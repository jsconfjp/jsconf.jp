import React from "react"
import { Logo } from './Logo'

type Props = {
    name: string,
    photo: string,
    biography: string,
    github: string,
    twitter: string,
}

export function Speaker(props: Props) {
    const { name,
        photo,
        biography,
        github,
        twitter } = props

    return (
        <>
            <h2>{name}</h2>
            <img src={photo} width="100" />
            <p>{biography}</p>
            <p>
                <a href={github} target="_blank">
                    GitHub
            </a>
                <a href={twitter} target="_blank">
                    Twitter
            </a>
            </p>
        </>
    )
}

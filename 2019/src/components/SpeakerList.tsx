import React from "react"
import { Speaker, Props as SpeakerType } from './Speaker'

export type Props = {
    speakers: SpeakerType[]
}

export function SpeakerList(props: Props) {
    const { speakers } = props

    return (
        <>
            {speakers.map(speaker => (
                <Speaker
                    key={speaker.name}
                    name={speaker.name}
                    photo={speaker.photo}
                    biography={speaker.biography}
                    github={speaker.github}
                    twitter={speaker.twitter}
                />
            ))}
        </>
    )
}

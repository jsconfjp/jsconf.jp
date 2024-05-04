import React from "react"
import styled from "styled-components"
import { Speaker, AvatarType } from "./Speaker"
import { SpeakerType, TalkType } from "../data/types"

export type Props = {
  speakers: SpeakerType[]
  avatars: AvatarType[]
  talks: TalkType[]
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  flex-wrap: wrap;
  gap: 1.5em;
`

export function SpeakerList(props: Props) {
  const { speakers, avatars, talks } = props
  const talkMap: { [uuid: string]: TalkType } = talks.reduce(
    (acc, talk) => ({
      ...acc,
      [talk.uuid]: talk as TalkType,
    }),
    {},
  )
  const avatarMap: { [uuid: string]: AvatarType } = avatars.reduce(
    (acc, avatar) => ({ ...acc, [avatar.uuid]: avatar }),
    {},
  )
  const items = speakers
    .filter(speaker => {
      return speaker.presentations.length > 0
    })
    .map(speaker => {
      const talk = talkMap[speaker.presentations[0]]
      return {
        speaker,
        talk,
        avatar:
          avatarMap[speaker.uuid] ?? "/sponsors/" + talk.sponsorIDs[0] + ".png",
      }
    })

  return (
    <Container>
      {items.map(item => {
        return <Speaker key={item.speaker.uuid} {...item} />
      })}
    </Container>
  )
}

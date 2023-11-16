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
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 60px;
  grid-row-gap: 60px;

  ${({ theme }) => theme.breakpoints.mobile} {
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 20px;
  }
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

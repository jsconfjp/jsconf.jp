import { Rooms } from "../util/misc"

export type TalkType = {
  uuid: string
  kind:
    | "OPEN"
    | "OPENING_TALK"
    | "STREAM"
    | "TALK"
    | "BREAK"
    | "CLOSING_TALK"
    | "AFTER_PARTY"
    | "CLOSED"
  title: string
  titleJa: string
  description: string
  descriptionJa: string
  spokenLanguage: string
  slideLanguage: string
  speakerIDs: string[]
  sponsorIDs: string[]
  date: "day1"
  stream?: Rooms
  startsAt: string
  endsAt: string
  hiddenTimeBoxes: string[] | null
  track: Rooms
  slidesUrl: string
  youtube: string
}

export type SpeakerType = {
  uuid: string
  name: string
  nameReading: string
  biography: string
  biographyJa: string
  presentations: string[]
  github: string
  mastodon: string
  homepage: string
  twitter: string
  location: string
  pronoun: string
}

export type Session = TalkType & {
  break: boolean
  speakers: SpeakerType[]
  sponsors: SpeakerType[]
}

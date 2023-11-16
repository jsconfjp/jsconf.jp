export type TalkType = {
  uuid: string
  title: string
  titleJa: string
  description: string
  descriptionJa: string
  spokenLanguage: string
  slideLanguage: string
  speakerIDs: string[]
  sponsorIDs: string[]
  presenterNameEn: string | undefined
  presenterNameJa: string | undefined
  date: "day1"
  startsAt: string
  endsAt: string
  hiddenTimeBoxes: string[] | null
  room: "A" | "B"
}

export type SpeakerType = {
  uuid: string
  name: string
  biography: string
  biographyJa: string
  presentations: string[]
  github: string
  twitter: string
  location: string
}

export type Session = TalkType & {
  break: boolean
  speakers: SpeakerType[]
  sponsors: SpeakerType[]
}

import groupBy from "lodash/groupBy"
import sortBy from "lodash/sortBy"
import mapValues from "lodash/mapValues"

import { times, Dates } from "../util/misc"
import { Session, SpeakerType, TalkType } from "../data/types"

type Timebox = {
  timebox: string
  sessions: Session[]
}
type Timetable = {
  [K in Dates]: Timebox[]
}

export function generateTimetable({
  speakers,
  sponsors,
  talks,
}: {
  speakers: SpeakerType[]
  sponsors: SpeakerType[]
  talks: TalkType[]
}): Timetable {
  const lookup: Record<string, SpeakerType> = speakers.reduce(
    (acc, speaker) => ({ ...acc, [speaker.uuid]: speaker }),
    {},
  )

  const talksByDay = groupBy(talks, talk => talk.date)
  const talksByTimeboxes = mapValues(talksByDay, (talks): Timebox[] => {
    const sessions = sortBy(talks, talk => talk.track).map(talk => ({
      ...talk,
      break:
        talk.kind === "BREAK" || talk.kind === "OPEN" || talk.kind === "CLOSED",
      speakers:
        talk.speakerIDs?.map(speakerID => {
          const speaker = lookup[speakerID]
          if (!speaker) {
            throw new Error(
              `Speaker ${speakerID} not found in "${talk.title}" (${talk.uuid})`,
            )
          }
          return speaker
        }) ?? [],
      sponsors:
        talk.sponsorIDs?.map(sponsorID => {
          const sponsor = sponsors.find(s => s.uuid === sponsorID)
          if (!sponsor) {
            throw new Error(
              `Sponsor ${sponsorID} not found in "${talk.title}" (${talk.uuid})`,
            )
          }
          return sponsor
        }) ?? [],
    }))
    const timeboxes = groupBy(
      sessions,
      session => `${session.startsAt}-${session.endsAt}`,
    )
    delete timeboxes["null-null"]

    const sortedKeys = sortBy(Object.keys(timeboxes), timebox => {
      return timebox.split("-")[0]
    })
    return sortedKeys.map(key => ({
      timebox: key,
      sessions: timeboxes[key],
    }))
  })

  return Object.fromEntries(
    Object.keys(times).map(day => [day, talksByTimeboxes[day] ?? []]),
  ) as Timetable
}

import groupBy from "lodash/groupBy"
import sortBy from "lodash/sortBy"
import mapValues from "lodash/mapValues"

// FIXME: Should not import from here
import { SpeakerType, TalkType } from "../components/Speaker"

type Session = TalkType & {
  break: boolean
  speakers: SpeakerType[]
}

type Timebox = {
  timebox: string
  sessions: Session[]
}
type Timetable = {
  day1: Timebox[]
  day2: Timebox[]
}

export function generateTimetable({
  speakers,
  talks,
}: {
  speakers: SpeakerType[]
  talks: TalkType[]
}): Timetable {
  const lookup: Record<string, SpeakerType> = speakers.reduce(
    (acc, speaker) => ({ ...acc, [speaker.uuid]: speaker }),
    {},
  )

  const talksByDay = groupBy(talks, talk => talk.date)
  const talksByTimeboxes = mapValues(talksByDay, (talks): Timebox[] => {
    const sessions = sortBy(talks, talk => talk.room).map(talk => ({
      ...talk,
      break: talk.title === "Break",
      speakers: talk.speakerIDs.map(speakerID => {
        const speaker = lookup[speakerID]
        if (!speaker) {
          throw new Error(
            `Speaker ${speakerID} not found in "${talk.title}" (${talk.uuid})`,
          )
        }
        return speaker
      }),
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

  return {
    day1: talksByTimeboxes["2019/11/30"] || [],
    day2: talksByTimeboxes["2019/12/01"] || [],
  }
}
import fs from "fs"
import path from "path"
import * as XLSX from "xlsx"
import * as YAML from "js-yaml"
// import fetch from "node-fetch"
// import imageType from "image-type"
import chalk from "chalk"
import changeCase from "change-case"
import format from "./format"

type PresenterRow = {
  Timestamp: number
  featured: boolean
  uuid: string
  presentations: string
  "presentation-title-en": string
  invited: "cfp" | "cancel" | "invitation"
  name: string
  image: string
  "biography-en": string
  "biography-ja": string
}
type PresentationRow = {
  Timestamp: number
  uuid: string
  "title-en": string
  "title-ja": string
  "spoken-language": string
  "description-en": string
  "description-ja": string
}
type TimetableRow = {
  start: string
  end: string
  a: string
  b: string
  c: string
}
type Session = {
  uuid: string
  date: string
  startsAt: string
  endsAt: string
  room: "A" | "B" | "C"
}

const todoToEmpty = (str: string) =>
  str
    .replace("TODO", "")
    .replace("TBA", "")
    .trim()

const DIST_SPEAKERS = path.resolve(
  __dirname,
  "..",
  "src",
  "data",
  "speakers.yaml"
)
const DIST_TALKS = path.resolve(__dirname, "..", "src", "data", "talks.yaml")

const [file] = process.argv.slice(2)
if (!file) {
  console.error(`Usage: ts-node scripts/import-talks.ts PATH/TO/.xlsx`)
  process.exit(1)
}

const xlsxFilePath = path.isAbsolute(file)
  ? file
  : path.join(process.cwd(), file)
const workBook = XLSX.readFile(xlsxFilePath)

// Speakers
const { presenters } = workBook.Sheets
const speakerRows = XLSX.utils
  .sheet_to_json<PresenterRow>(presenters)
  .filter(row => !!row.Timestamp)
  .filter(row => row.invited !== "cancel")
const speakers = speakerRows
  .map(row => ({
    uuid: row.uuid,
    name: row.name,
    featured: row.featured,
    presentations: row.presentations.trim().split(/\s*,\s*/gi),
    biography: todoToEmpty(row["biography-en"]),
    biographyJa: todoToEmpty(row["biography-ja"])
  }))
  .sort((a, b) => a.uuid[0].localeCompare(b.uuid[0]))

fs.writeFileSync(DIST_SPEAKERS, YAML.dump(speakers))
console.log(chalk.dim(`Fetch ${speakers.length} speakers`))
console.log(
  chalk.cyan(`Save speakers to ${path.relative(process.cwd(), DIST_SPEAKERS)}`)
)

/*
const toPath = (uuid: string, ext: string) => {
  return path.join(
    __dirname,
    "..",
    "src",
    "images",
    "speakers",
    `${uuid}.${ext}`
  )
}
Promise.all(
  speakerRows
    .filter(speakerRow => {
      const extensions = ["jpg", "png"]
      return !extensions.some(ext => {
        return fs.existsSync(toPath(speakerRow.uuid, ext))
      })
    })
    .map(async speakerRow => {
      console.log(
        chalk.dim(`fetch ${speakerRow.uuid}'s avatar from ${speakerRow.image}`)
      )
      const buff = await fetch(speakerRow.image).then(res => res.buffer())
      const type = imageType(buff)
      if (!type) {
        throw new Error(
          `Invalid image format: ${
            speakerRow.image
          }\nMaybe this URL is not pointed at image, so please access in browser and save it to ${toPath(
            speakerRow.uuid,
            "xxx"
          )} manually.`
        )
      }
      const avatarPath = toPath(speakerRow.uuid, type.ext)
      fs.writeFileSync(avatarPath, buff)
      console.log(
        chalk.cyan(
          `Sabve ${speakerRow.uuid}'s avatar to ${path.relative(
            process.cwd(),
            avatarPath
          )}`
        )
      )
    })
)
*/

// Talks
const mapTalks = (acc: Omit<Session, "date">[], row: TimetableRow) => {
  const { start: startsAt, end: endsAt } = row
  return acc.concat(
    [
      {
        uuid: row.a,
        startsAt,
        endsAt,
        room: "A" as const
      },
      {
        uuid: row.b,
        startsAt,
        endsAt,
        room: "B" as const
      },
      {
        uuid: row.c,
        startsAt,
        endsAt,
        room: "C" as const
      }
    ].filter(talk => !!talk.uuid)
  )
}
const addDate = (date: string) => (row: Omit<Session, "date">): Session => ({
  ...row,
  date,
})
const notTalkIds = [
  "open",
  "opening-talk",
  "break",
  "Party",
  "Closing",
  "panel-discussion",
  "sponsor-talk"
]
const { presentations, 20231119: day1 } = workBook.Sheets
const sessions = [
  ...XLSX.utils
    .sheet_to_json<TimetableRow>(day1)
    .reduce(mapTalks, [])
    .map(addDate("day1"))
]
const talkRows = XLSX.utils
  .sheet_to_json<PresentationRow>(presentations)
  .filter(row => !!row.Timestamp)

const talks = sessions
  .map(session => {
    const talk = talkRows.find(row => row.uuid === session.uuid)
    const sessionSpeakers = speakers.filter(
      ({ presentations }) => presentations.indexOf(session.uuid) !== -1
    )

    if (notTalkIds.includes(session.uuid)) {
      return {
        ...session,
        uuid: `${session.date}-break-${session.room}-${session.startsAt}`,
        title: changeCase.upperCaseFirst(session.uuid.replace("-", " ")),
        speakerIDs: []
      }
    } else if (session.uuid === "lisi-linhart") {
      return null
    } else if (!talk) {
      throw new Error(`Talk not found: ${session.uuid}`)
    }

    return {
      uuid: talk.uuid,
      date: session.date,
      startsAt: session.startsAt,
      endsAt: session.endsAt,
      room: session.room,
      title: todoToEmpty(talk["title-en"]),
      titleJa: todoToEmpty(talk["title-ja"]),
      description: todoToEmpty(talk["description-en"]),
      descriptionJa: todoToEmpty(talk["description-ja"]),
      spokenLanguage: talk["spoken-language"],
      slideLanguage: "",
      speakerIDs: sessionSpeakers.map(({ uuid }) => uuid)
    }
  })
  .filter(el => el != null)
  .sort((a, b) => a!.uuid[0].localeCompare(b!.uuid[0]))

// 同じUUIDのトークをマージする
for (let talk of talks) {
  const index = talks.indexOf(talk)
  const restTalks = talks.slice(index + 1)

  for (let restTalk of restTalks) {
    if (talk!.uuid === restTalk!.uuid) {
      const restTalkIndex = talks.indexOf(restTalk)
      talks.splice(restTalkIndex, 1)
      talk!.endsAt = restTalk!.endsAt
    }
  }
}

fs.writeFileSync(DIST_TALKS, YAML.dump(talks))
console.log(chalk.dim(`Fetch ${talks.length} sessions`))
console.log(
  chalk.cyan(`Save sessions to ${path.relative(process.cwd(), DIST_TALKS)}`)
)

format()

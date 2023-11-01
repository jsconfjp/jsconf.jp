#!/usr/bin/env node --no-warnings --loader ts-node/esm
import * as fs from "fs/promises"
import * as path from "path"
import * as YAML from "js-yaml"
import imageType from "image-type"
import { parse as csvParse } from "csv-parse"
import chalk from "chalk"

type PresenterRow = {
  featured: "FALSE" | "TRUE"
  uuid: string
  presentations: string
  "presentation-title-en": string
  name: string
  "name-reading": string
  pronoun: string
  mastodon: string
  github: string
  image: string
  "biography-en": string
  "biography-ja": string
  "X (twitter)": string
  homepage: string
  "presentation-location": "On-Site / 会場" | "Remotely / リモート"
}
type PresentationRow = {
  uuid: string
  presentation: string
  type: "Presentation - 30min" | "Lightning Talk - 10 min"
  "title-en": string
  "title-ja": string
  "spoken-language": string
  "description-en": string
  "slides-en": string
  "slides-ja": string
  "description-ja": string
  "slides-language": string
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
  str.replace(/^(TODO|TBA)$/g, "").trim() || undefined

const normalizeTwitter = (str: string) =>
  str.trim().replace(/^(https?:\/\/)?x.com\//g, "") || undefined

const normalizeGithub = (str: string) =>
  str.trim().replace(/^(https?:\/\/)?github.com\//g, "") || undefined

const normalizeHomepage = (str: string) => {
  str = str.trim()
  if (str === "") {
    return undefined
  }
  if (str.endsWith("/")) {
    str = str.substring(0, str.length - 1)
  }
  return `https://${str.replace(/^https?:\/\//g, "")}`
}

const DIST_SPEAKERS = new URL("../src/data/speakers.yaml", import.meta.url)
  .pathname
const DIST_TALKS = new URL("../src/data/talks.yaml", import.meta.url).pathname

const URLS = {
  schedule: {
    day1: "https://docs.google.com/spreadsheets/d/e/2PACX-1vSXITBODWuYi_kGDe8mJBM-Z7U6n43VAllNvZO-oA7nekk_hBuYrWoSGcWVgzLWRV25aqJuDzN6fh7M/pub?gid=1755144529&single=true&output=csv",
  },
  speakers:
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vSXITBODWuYi_kGDe8mJBM-Z7U6n43VAllNvZO-oA7nekk_hBuYrWoSGcWVgzLWRV25aqJuDzN6fh7M/pub?gid=2056928025&single=true&output=csv",
  presentations:
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vSXITBODWuYi_kGDe8mJBM-Z7U6n43VAllNvZO-oA7nekk_hBuYrWoSGcWVgzLWRV25aqJuDzN6fh7M/pub?gid=1059015891&single=true&output=csv",
} as const

async function load<T = any>(url: string): Promise<T[]> {
  const data = await fetch(url)
  const result: T[] = []
  for await (const entry of csvParse(await data.text(), { columns: true })) {
    result.push(entry)
  }
  return result
}

const SPEAKER_ROOT = new URL(
  path.join("..", "src", "images", "speakers/"),
  import.meta.url,
)

const getSpeakerImagePath = (uuid: string, ext: string) =>
  new URL(path.join(".", `${uuid}.${ext}`), SPEAKER_ROOT).pathname

const mapTalks = (acc: Omit<Session, "date">[], row: TimetableRow) => {
  const { start: startsAt, end: endsAt } = row
  return acc.concat(
    [
      {
        uuid: row.a,
        startsAt,
        endsAt,
        room: "A" as const,
      },
      {
        uuid: row.b,
        startsAt,
        endsAt,
        room: "B" as const,
      },
      {
        uuid: row.c,
        startsAt,
        endsAt,
        room: "C" as const,
      },
    ].filter(talk => !!talk.uuid),
  )
}
const addDate =
  (date: string) =>
  (row: Omit<Session, "date">): Session => ({
    ...row,
    date,
  })

const notTalkIds = [
  "open",
  "opening-talk",
  "break",
  "Break",
  "party",
  "closing-talk",
  "TBA",
  "Closing",
  "panel-discussion",
  "sponsor-talk",
  "sponsor",
]

function fixImageUrl(imageUrl: string): string {
  imageUrl = imageUrl.trim()
  let parts =
    /^https:\/\/drive\.google\.com\/file\/d\/(.*)\/(preview|view\?usp=sharing)$/g.exec(
      imageUrl,
    )
  if (parts) {
    return `https://drive.google.com/uc?id=${parts[1]}&export=download`
  }
  return imageUrl
}

// const googleRedirectPattern = `https://photos.google.com/share/AF1QipPeJRdqGBKcifc7FTDSJFAibj2Ogl7zXRXaYLOoqEnKdFxSrQ8iW0dAat7Ceygg6A?key=ZUlVaUlSU0NfUGZ5TmdLY2dtXy16TDRYUEZZSzZn

async function loadImage(speaker: string, imageUrl: string): Promise<string> {
  imageUrl = fixImageUrl(imageUrl)
  if (imageUrl === "https://please.submit/a/url") {
    throw new Error("Dummy URL")
  }
  let res = await fetch(imageUrl)
  if (res.status !== 200) {
    throw new Error(
      `Could not load image at ${imageUrl}: status code = ${res.status}`,
    )
  }
  let buff: Uint8Array
  try {
    buff = new Uint8Array(await res.arrayBuffer())
  } catch (err) {
    throw new Error(`Could not load image at ${imageUrl}: ${err}`)
  }
  const type = await imageType(buff)
  if (!type) {
    throw new Error(
      `Invalid image format: ${imageUrl}\nMaybe this URL is not pointed at image, so please access in browser and save it to ${getSpeakerImagePath(
        speaker,
        "xxx",
      )} manually.`,
    )
  }
  const avatarPath = getSpeakerImagePath(speaker, type.ext)
  await fs.writeFile(avatarPath, buff)
  return avatarPath
}

;(async () => {
  // Presentations
  const talkRows = await load<PresentationRow>(URLS.presentations)

  // Speakers
  const speakers = (await load<PresenterRow>(URLS.speakers))
    .map(row => ({
      uuid: row.uuid,
      name: row.name,
      nameReading: row["name-reading"],
      pronoun: row.pronoun,
      featured: /^TRUE$/.test(row.featured),
      image: row.image,
      presentations: talkRows
        .filter(pres => pres.uuid === row.uuid)
        .map(pres => pres.presentation),
      biography: todoToEmpty(row["biography-en"]),
      biographyJa: todoToEmpty(row["biography-ja"]),
      twitter: normalizeTwitter(row["X (twitter)"]),
      github: normalizeGithub(row.github),
      mastodon: row.mastodon || undefined,
      homepage: normalizeHomepage(row.homepage),
      location:
        row["presentation-location"] === "On-Site / 会場"
          ? "on-site"
          : "remote",
    }))
    .sort((a, b) => a.uuid.localeCompare(b.uuid))
  console.log(chalk.dim(`Fetch ${speakers.length} speakers`))

  console.log(
    chalk.cyan(
      `Save speakers to ${path.relative(process.cwd(), DIST_SPEAKERS)}`,
    ),
  )
  await fs.writeFile(
    DIST_SPEAKERS,
    YAML.dump(speakers.map(({ image, ...rest }) => rest)),
  )

  await fs.rm(SPEAKER_ROOT.pathname, { recursive: true })
  await fs.mkdir(SPEAKER_ROOT.pathname, { recursive: true })
  await Promise.all(
    speakers.map(async speakerRow => {
      console.log(
        chalk.dim(`fetch ${speakerRow.uuid}'s avatar from ${speakerRow.image}`),
      )
      try {
        const avatarPath = await loadImage(speakerRow.uuid, speakerRow.image)
        console.log(
          chalk.cyan(
            `Save ${speakerRow.uuid}'s avatar to ${path.relative(
              process.cwd(),
              avatarPath,
            )}`,
          ),
        )
      } catch (err) {
        console.warn(
          chalk.red(
            `ERROR: ${speakerRow.uuid}'s avatar can not be loaded from ${speakerRow.image}: ${err}`,
          ),
        )
        const avatarPath = getSpeakerImagePath(speakerRow.uuid, "jpg")
        await fs.cp(new URL("../tbd-01.jpg", SPEAKER_ROOT), avatarPath)
      }
    }),
  )

  // Talks
  const sessions = (await load<TimetableRow>(URLS.schedule.day1))
    .reduce(mapTalks, [])
    .map(addDate("day1"))

  const talks = sessions
    .map(session => {
      const talk = talkRows.find(row => row.presentation === session.uuid)

      const sessionSpeakers = speakers.filter(
        ({ presentations }) => presentations.indexOf(session.uuid) !== -1,
      )

      if (notTalkIds.includes(session.uuid)) {
        return {
          ...session,
          uuid: `${session.date}-break-${session.room}-${session.startsAt}`,
          title: session.uuid.replace("-", " "),
          speakerIDs: [],
        }
      } else if (!talk) {
        throw new Error(`Talk not found: ${session.uuid}`)
      }

      return {
        uuid: talk.presentation,
        date: session.date,
        startsAt: session.startsAt,
        endsAt: session.endsAt,
        room: session.room,
        title: todoToEmpty(talk["title-en"]),
        titleJa: todoToEmpty(talk["title-ja"]),
        description: todoToEmpty(talk["description-en"]),
        descriptionJa: todoToEmpty(talk["description-ja"]),
        spokenLanguage: talk["spoken-language"],
        slideLanguage: talk["slides-language"] || talk["spoken-language"],
        speakerIDs: sessionSpeakers.map(({ uuid }) => uuid),
      }
    })
    .filter(Boolean)
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
  console.log(chalk.dim(`Fetch ${talks.length} sessions`))

  await fs.writeFile(DIST_TALKS, YAML.dump(talks))
  console.log(
    chalk.cyan(`Save sessions to ${path.relative(process.cwd(), DIST_TALKS)}`),
  )

  // format()
})()

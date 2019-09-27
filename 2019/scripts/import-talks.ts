import fs from "fs"
import path from "path"
import * as XLSX from "xlsx"
import * as YAML from "js-yaml"
import chalk from "chalk"

type PresenterRow = {
  Timestamp: number
  link: string
  featured: boolean
  uuid: string
  presentations: string
  "presentation-title-en": string
  name: string
  image: string
  "biography-en": string
  "biography-ja": string
}
// type PresentationRow = {}

const DIST_SPEAKERS = path.resolve(
  __dirname,
  "..",
  "src",
  "data",
  "speakers.yaml",
)
// const DIST_TALKS = path.resolve(__dirname, '..', 'src', 'data', 'talks.yaml')

const [file] = process.argv.slice(2)
if (!file) {
  console.error(`Usage: ts-node scripts/import-talks.ts PATH/TO/.xlsx`)
  process.exit(1)
}

const xlsxFilePath = path.isAbsolute(file)
  ? file
  : path.join(process.cwd(), file)
const workBook = XLSX.readFile(xlsxFilePath)
const { presenters } = workBook.Sheets

const speakers = XLSX.utils
  .sheet_to_json<PresenterRow>(presenters)
  .filter(row => !!row.Timestamp)
  .map(row => ({
    uuid: row.uuid,
    name: row.name,
    featured: row.featured,
    biography: row["biography-en"].replace("TODO", "").trim(),
    biographyJa: row["biography-ja"].replace("TODO", "").trim(),
  }))
  .sort((a, b) => a.uuid[0].localeCompare(b.uuid[0]))

fs.writeFileSync(DIST_SPEAKERS, YAML.safeDump(speakers))
console.log(chalk.cyan(`Fetch ${speakers.length} speakers`))
console.log(
  chalk.cyan(`Save speakers to ${path.relative(process.cwd(), DIST_SPEAKERS)}`),
)

// const talks = utils.sheet_to_json(presentations).map(() => ({

// }))

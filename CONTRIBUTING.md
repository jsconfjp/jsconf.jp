# Contribution guide

## Launch the development server

```
cd 2021
npm install
npm run start
```

Some images will not be displayed locally.

## Edit your CFP

To edit your CFP, you need to update these.
JSConf JP staff will assist you with English or Japanese translation.

- 2021/src/data/talks.yml
  - You can edit these fields whatever you want.
    - `title`: The title of your talk.
    - `titleJa`: The title in Japanese.
    - `description`: The description of you talk.
    - `descriptionJa`: The description in Japanese.
    - `spokenLanguage`: What language are you going to speak in?
    - `slideLanguage`: What language are you going to create your slides?
  - Please don't change these fields: `uuid`, `date`, `startsAt`, `endsAt`, `room`, `speakerIDs`.
- 2021/src/pages/speakers.tsx
  - You can edit these fields whatever you want.
    - `name`: Your name. Nicknames are also fine.
    - `biography`: bio in English
    - `biographyJa`: bio in Japanese
  - Please don't change these fields: `uuid`, `featured`, `presentations`

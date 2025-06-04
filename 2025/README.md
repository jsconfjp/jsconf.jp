## Getting Started

This project uses [nvm](https://github.com/nvm-sh/nvm) for Node.js version management.

```
nvm use
cd 2025
npm i
npm run dev
```

Open [http://localhost:3000/2025](http://localhost:3000/2025) with your browser to see the result.

## Tech Stack

- Package Manager: npm
- Framework: Next.js with [TypeScript](https://nextjs.org/docs/pages/api-reference/config/typescript), [ESLint](https://nextjs.org/docs/app/api-reference/config/eslint) and [Static Site Generation (SSG)](https://nextjs.org/docs/pages/building-your-application/rendering/static-site-generation)
- i18n: [next-intl](https://next-intl.dev/)
- Styling: [tailwindcss](https://tailwindcss.com/)
- Icon: [heroicons](https://heroicons.com/)

## Project Structure

- `src/`
  - `app/`: Next.js App Router
  - `components/`: Shared components across pages
  - `i18n/`: files required by [next-intl](https://next-intl.dev/)
  - `types/`: Custom type definitions to override
  - `lib/`: Utilities
  - `constants/`: Constants modeled with type definitions (i.e. Talk, Sponsors, Team Member, etc.)
  - `assets/`: Static files (i.e. images)
  - `doc/`: Static Markdown files (i.e. CoC, etc)
- `mdx-components.tsx`: MDX elements for `/[locale]/doc/*` routes.
- `messages/`
  - `[locale].json`: JSON File defining different wording for each language

## Data Modeling

The most complex data modeling on the conference website is the relationship between speakers, talks, and sessions. At first glance, you might think that Speaker and Talk have a 1:1 relationship, but it's actually more complicated than that.

- `Speaker`: Universal information about speakers that does not change depending on the talk is registered in the Speaker section.
  - See `2025/src/constants/talks.ts`
  - **Caution:** It can talk and participate multiple talks or sessions
    - ex. https://jsconf.jp/2019/schedule/ (See Mariko Kosaka)
- `Talk`: contains information about that talk session.
  - See `2025/src/constants/talks.ts`
  - **Caution:** Many talks are given by one person, but there are also talks given by multiple people.
    - ex. https://jsconf.jp/2019/talk/s-greif-r-benitte
    - ex. https://jsconf.jp/2024/talk/hiroki-tani-corey-lee/
- `Session`: contains information such as the location and time of the session
  - See `2025/src/constants/schedule.ts`
  - **Caution:** Many sessions are talks, but there are also events other than talks with set times and locations.
    - ex. https://jsconf.jp/2024/schedule/ (See the Session Title **(Stream)**. It is not actually a talk)

## How to

### Add you as a team member on the website

Please modify `VOLUNTEER_TEAM` in the `2025/src/constants/team.ts` and submit a pull request.

## Learn More about Next.js

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

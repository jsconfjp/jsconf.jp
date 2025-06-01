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

## How to

### Add you as a team member on the website

Please modify `VOLUNTEER_TEAM` in the `2025/src/constants/team.ts` and submit a pull request.

## Learn More about Next.js

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

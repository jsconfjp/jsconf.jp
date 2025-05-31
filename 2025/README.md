## Getting Started

First, run the development server:

```bash
nvm use
npm i
npm run dev
```

Open [http://localhost:3000/2025](http://localhost:3000/2025) with your browser to see the result.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

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

## How to

### Add you as a team member on the website

Please modify `VOLUNTEER_TEAM` in the `2025/src/constants/team.ts` and submit a pull request.

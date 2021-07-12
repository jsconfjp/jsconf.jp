# jsconf.jp 2021

URL: https://jsconf.jp/2021

## Develop

```
git clone git@github.com:jsconfjp/jsconf.jp.git
cd jsconf.jp/2021
npm i
npm start -- --open
```

## 🧐 What's inside?

    .
    ├── src/components/
    ├── src/data/
    ├── src/i18n/
    ├── src/images/
    ├── src/pages/
    ├── src/templates/
    ├── src/theme.ts
    └── types/styled.ts

1.  **`src/components/`**: Components to use in pages/
1.  **`src/data/`**: Data to define sponsors, speakers and members.
1.  **`src/i18n/`**: Translation files
1.  **`src/images/`**: Images
1.  **`src/pages/`**, **`src/templates/`**: See [Gatsby documentation(Creating and Modifying Pages)](https://www.gatsbyjs.org/docs/creating-and-modifying-pages/)
1.  **`src/theme.ts`**, **`src/theme.ts`**: Type definition and settings of styled-components theme.

## 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.org/). Here are some places to start:

- **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.org/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.org/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.

## Development

### Update sponsors

If you want to add sponsor, you need to add elements to the array of `src/data/sponsors.yaml` like as:

https://github.com/jsconfjp/jsconf.jp/blob/5eb2d5d22f7168e3f988f78e873e589b6ab7a5c3/2021/src/data/sponsors.yaml#L41-L44

### Update speakers, talks, timetable

If you want to add speaker, talks or timetable, you need to follow instructions as below:

1. Open Google Sheets named `Schedule - JSConfJP 2021`
   - you don't know sheet URL? Please contact organizers
1. Download it as `Microsoft Excel(.xlsx)`
1. Run `scripts/import-talks.ts` with path of downloaded file

```
npx ts-node scripts/import-talks.ts PATH/TO/.xlsx
```

### Update styled-components theme

If you want to update styled-components theme, you need to update two files as below:

- types/styled.d.ts
- src/theme.ts

### Internationalization(i18n)

We using [i18next-react](https://github.com/i18next/react-i18next) as i18n library.

- Configuration: `src/i18n/index.ts` [API reference](https://www.i18next.com/overview/configuration-options)
- Engligh: `src/i18n/en.ts`
- Japanese: `src/i18n/ja.ts`
- UI to change display language: `src/components/LanguageSwitch.tsx`

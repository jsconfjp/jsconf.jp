import React, { useCallback } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { useTranslation } from "react-i18next"

import { Header } from "./Header"
import { LanguageSwitch } from "./LanguageSwitch"
import "./layout.css"

type Props = {
  children: React.ReactNode
}

export function Layout({ children }: Props) {
  const { i18n } = useTranslation()
  const onChangeLanguage = useCallback(
    (lang: string) => {
      i18n.changeLanguage(lang)
    },
    [i18n],
  )
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          twitter
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <LanguageSwitch languages={["en", "ja"]} onChange={onChangeLanguage} />
      <main>{children}</main>
      <footer>
        &copy; 2019-{new Date().getFullYear()}{" "}
        <a
          target="_blank"
          href={`https://twitter.com/${data.site.siteMetadata.twitter}`}
        >
          @{data.site.siteMetadata.twitter}
        </a>
      </footer>
    </>
  )
}

import React, { useCallback } from "react"
import styled, { ThemeProvider } from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { useTranslation } from "react-i18next"

import { theme } from "../theme"
import { Header } from "./Header"
import { Footer } from "./Footer"
import { Button } from "./Button"
import "./layout.css"

type Props = {
  children: React.ReactNode
}

const MainBox = styled.div`
  position: relative;
`
const BackToTopBox = styled.div`
  position: absolute;
  bottom: 0;
  right: 40px;
`

export function Layout({ children }: Props) {
  const { t, i18n } = useTranslation()
  const onChangeLanguage = useCallback(
    (lang: string) => {
      i18n.changeLanguage(lang)
    },
    [i18n],
  )
  const onRequestBackToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [])
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
    <ThemeProvider theme={theme}>
      <>
        <Header
          siteTitle={data.site.siteMetadata.title}
          onChangeLanguage={onChangeLanguage}
        />
        <MainBox>
          <main>{children}</main>
          <BackToTopBox>
            <Button color="primary" onClick={onRequestBackToTop}>
              {t("backToTop")}
            </Button>
          </BackToTopBox>
        </MainBox>
        <Footer />
      </>
    </ThemeProvider>
  )
}

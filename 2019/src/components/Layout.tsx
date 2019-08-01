import React, { useCallback } from "react"
import styled, { ThemeProvider } from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { useTranslation, useSSR } from "react-i18next"

import { store as i18nStore } from "../i18n"
import { theme } from "../theme"
import { Header } from "./Header"
import { HeaderMobile } from "./HeaderMobile"
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
const OnlyMobile = styled.div`
  ${({ theme }) => theme.breakpoints.largerThanMobile} {
    display: none;
  }
`
const NotMobile = styled.div`
  ${({ theme }) => theme.breakpoints.mobile} {
    display: none;
  }
`

export function Layout({ children }: Props) {
  // https://react.i18next.com/latest/ssr#passing-initial-translations-initial-language-down-to-client
  // useSSR(i18nStore, "en")

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
        <OnlyMobile>
          <HeaderMobile
            siteTitle={data.site.siteMetadata.title}
            onChangeLanguage={onChangeLanguage}
          />
        </OnlyMobile>
        <NotMobile>
          <Header
            siteTitle={data.site.siteMetadata.title}
            onChangeLanguage={onChangeLanguage}
          />
        </NotMobile>
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

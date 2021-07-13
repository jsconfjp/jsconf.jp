import React, { useCallback } from "react"
import styled, { ThemeProvider } from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { useTranslation } from "react-i18next"

import { theme } from "../theme"
import { Header } from "./Header"
import { HeaderMobile } from "./HeaderMobile"
import { Footer } from "./Footer"
import { Button } from "./Button"
import { SmoothScroll } from "./SmoothScroll"
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
  const { t, i18n } = useTranslation()
  const onChangeLanguage = useCallback(
    (lang: string) => {
      i18n.changeLanguage(lang)
    },
    [i18n]
  )
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          twitter
          ticketUrl
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
            ticketUrl={data.site.siteMetadata.ticketUrl}
            onChangeLanguage={onChangeLanguage}
          />
        </OnlyMobile>
        <NotMobile>
          <Header
            siteTitle={data.site.siteMetadata.title}
            ticketUrl={data.site.siteMetadata.ticketUrl}
            onChangeLanguage={onChangeLanguage}
          />
        </NotMobile>
        <MainBox>
          <main>{children}</main>
          <BackToTopBox>
            <SmoothScroll selector="body">
              <Button color="primary">{t("backToTop")}</Button>
            </SmoothScroll>
          </BackToTopBox>
        </MainBox>
        <Footer />
      </>
    </ThemeProvider>
  )
}

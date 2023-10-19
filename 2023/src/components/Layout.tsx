import React, { useCallback } from "react"
import styled, { ThemeProvider } from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { useTranslation } from "react-i18next"

import { theme } from "../theme"
import { Header } from "./Header"
import { HeaderMobile } from "./HeaderMobile"
import { Footer } from "./Footer"
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
  @media (max-width: 768px) {
    position: relative;
    right: 0px;
    text-align: center;
    margin-top: 10px;
  }
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
const BackToTopButton = styled.button`
  appearance: none;
  margin: 0;
  border: none;
  cursor: pointer;
  display: inline-block;
  font-family: ${({ theme }) => theme.fonts.header};
  font-size: 1.6rem;
  padding: 10px 24px;
  color: white;
  background-color: ${({ theme }) => theme.colors.primary};
`

export function Layout({ children }: Props) {
  const { t, i18n } = useTranslation()
  const onChangeLanguage = useCallback(
    (lang: string) => {
      i18n.changeLanguage(lang)
    },
    [i18n],
  )
  const { site } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          twitter
          ticketUrl
          sponsorFormUrl
          cfpFormUrl
          enableSpeakers
          enableVenue
          enableSchedule
          enableSponsors
        }
      }
    }
  `)

  return (
    <ThemeProvider theme={theme}>
      <>
        <OnlyMobile>
          <HeaderMobile
            siteTitle={site.siteMetadata.title}
            ticketUrl={site.siteMetadata.ticketUrl}
            enableSpeakers={site.siteMetadata.enableSpeakers}
            enableVenue={site.siteMetadata.enableVenue}
            enableSchedule={site.siteMetadata.enableSchedule}
            enableSponsors={site.siteMetadata.enableSponsors}
            onChangeLanguage={onChangeLanguage}
          />
        </OnlyMobile>
        <NotMobile>
          <Header
            siteTitle={site.siteMetadata.title}
            ticketUrl={site.siteMetadata.ticketUrl}
            enableSpeakers={site.siteMetadata.enableSpeakers}
            enableVenue={site.siteMetadata.enableVenue}
            enableSchedule={site.siteMetadata.enableSchedule}
            enableSponsors={site.siteMetadata.enableSponsors}
            onChangeLanguage={onChangeLanguage}
          />
        </NotMobile>
        <MainBox>
          <main>{children}</main>
          <BackToTopBox>
            <SmoothScroll selector="body">
              <BackToTopButton>{t("backToTop")}</BackToTopButton>
            </SmoothScroll>
          </BackToTopBox>
        </MainBox>
        <Footer />
      </>
    </ThemeProvider>
  )
}

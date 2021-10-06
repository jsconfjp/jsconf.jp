import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { useTranslation } from "react-i18next"

import { Logo } from "./Logo"
import { LanguageSwitch } from "./LanguageSwitch"
import { LinkButton } from "./LinkButton"

type Props = {
  siteTitle: string
  ticketUrl: string
  onChangeLanguage: (lang: string) => void
}

const Box = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: sticky;
  background-color: ${({ theme }) => theme.colors.base};
  z-index: 1;
  top: 0;
  height: 90px;
  box-shadow: 2px 0px 5px ${({ theme }) => theme.colors.shadow};
`
const InnerBox = styled.div`
  display: flex;
  width: 100%;
  height: 90px;
  max-width: ${({ theme }) => theme.width};
`
const Brand = styled.h1`
  display: flex;
  align-items: center;
  margin: 0;
  padding: 20px 40px;
`
const LogoLink = styled(Link)`
  margin-right: 20px;
  line-height: 0;
`
const MenuBox = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`
// @ts-expect-error To be updated
const MenuItem = styled(Link)`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.header};
  font-weight: bold;
  font-size: 2rem;
  text-decoration: none;
  text-transform: uppercase;

  :last-of-type {
    margin-right: 40px;
  }
`
const TicketBox = styled.div`
  flex: 1;
  display: flex;
  align-self: stretch;
  max-width: 200px;
`

export function Header(props: Props) {
  const { onChangeLanguage, ticketUrl } = props
  const { t, i18n } = useTranslation()

  return (
    <Box>
      <InnerBox>
        <Brand>
          <>
            <LogoLink to="/">
              <Logo size={46} alt="JSConf JP" />
            </LogoLink>
            <LanguageSwitch
              languages={{
                ja: "日本語",
                en: "EN",
              }}
              currentLanguage={i18n.language}
              onChange={onChangeLanguage}
            />
          </>
        </Brand>

        <MenuBox>
          {/* TODO: To be updated */}
          {/* <MenuItem to="/speakers/">{t("speakers")}</MenuItem> */}
          {/* <MenuItem to="/schedule/">{t("schedule")}</MenuItem> */}
          {/* <MenuItem to="/sponsors/">{t("sponsors")}</MenuItem> */}
          {ticketUrl ? (
            <TicketBox>
              <LinkButton color="primary" to={ticketUrl} size="inline">
                {t("tickets")}
              </LinkButton>
            </TicketBox>
          ) : null}
        </MenuBox>
      </InnerBox>
    </Box>
  )
}

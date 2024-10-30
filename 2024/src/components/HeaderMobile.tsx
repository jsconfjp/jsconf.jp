import React, { useState, useCallback } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Headroom from "react-headroom"

import { Logo } from "./Logo"
import { LanguageSwitch } from "./LanguageSwitch"
import { LinkButton } from "./LinkButton"
import { HamburgerMenu } from "./HamburgerMenu"
import { I18N } from "./I18N"

type Props = {
  siteTitle: string
  ticketUrl: string
  enableSpeakers: boolean
  enableVenue: boolean
  enableSchedule: boolean
  enableSponsors: boolean
  onChangeLanguage: (lang: string) => void
}

const Box = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.base};
  box-shadow: 2px 0px 5px ${({ theme }) => theme.colors.shadow};

  @media print {
    display: none;
  }
`
const InnerBox = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  height: 72px;
  padding: 8px 20px;
`
const Brand = styled.h1`
  flex: 1;
  display: flex;
  align-items: center;
  margin: 0;
`
const LogoLink = styled(Link)`
  margin-right: 20px;
  line-height: 0;
`
const MenuBox = styled.nav`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-bottom: 16px;
`
const LanguageSwitchBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
`
const MenuItem = styled(Link)`
  margin: 0 40px;
  padding: 32px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.header};
  font-weight: bold;
  font-size: 2rem;
  text-decoration: none;
  text-transform: uppercase;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  :last-child {
    border-bottom: 0;
  }
`
const TicketBox = styled.div`
  display: flex;
  width: 160px;
  height: 48px;
  margin-right: 20px;
`

export function InnerHeaderMobile(props: Props) {
  const {
    onChangeLanguage,
    ticketUrl,
    enableSpeakers,
    enableVenue,
    enableSchedule,
    enableSponsors,
  } = props
  const [menuOpen, setMenuOpen] = useState<boolean>(false)
  const toggleMenu = useCallback(() => {
    setMenuOpen(!menuOpen)
  }, [menuOpen])
  const changeLanguage = (language: string) => {
    setMenuOpen(false)
    onChangeLanguage(language)
  }
  const handleKeydown: React.KeyboardEventHandler = event => {
    if (event.key !== "Enter" && event.key !== " ") return
    event.preventDefault()
    toggleMenu()
  }

  return (
    <Box>
      <InnerBox>
        <Brand>
          <LogoLink to="/">
            <Logo size={46} />
          </LogoLink>
        </Brand>

        {ticketUrl ? (
          <TicketBox>
            <LinkButton color="primary" to={ticketUrl} size="inline">
              <I18N k="tickets" />
            </LinkButton>
          </TicketBox>
        ) : null}

        <HamburgerMenu
          open={menuOpen}
          onTouchEnd={toggleMenu}
          onKeyDown={handleKeydown}
        />
      </InnerBox>
      {menuOpen && (
        <MenuBox id="drawerMenu" aria-expanded={menuOpen}>
          <LanguageSwitchBox>
            <LanguageSwitch
              languages={{
                ja: "日本語",
                en: "EN",
              }}
              onChange={changeLanguage}
            />
          </LanguageSwitchBox>
          {enableSpeakers ? (
            <MenuItem to="/speakers/">
              <I18N k="speakers" />
            </MenuItem>
          ) : null}
          {enableVenue ? (
            <MenuItem to="/venue/">
              <I18N k="venue" />
            </MenuItem>
          ) : null}
          {enableSchedule ? (
            <MenuItem to="/schedule/">
              <I18N k="schedule" />
            </MenuItem>
          ) : null}
          {enableSponsors ? (
            <MenuItem to="/sponsors/">
              <I18N k="sponsors" />
            </MenuItem>
          ) : null}
        </MenuBox>
      )}
    </Box>
  )
}

export function HeaderMobile(props: Props) {
  return (
    <Headroom>
      <InnerHeaderMobile {...props} />
    </Headroom>
  )
}

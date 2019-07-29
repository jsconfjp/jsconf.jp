import React, { useState, useCallback } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { useTranslation } from "react-i18next"
import Headroom from "react-headroom"

import { Logo } from "./Logo"
import { LanguageSwitch } from "./LanguageSwitch"
import { LinkButton } from "./LinkButton"

type Props = {
  siteTitle: string
  onChangeLanguage: (lang: string) => void
}

const Box = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.base};
  box-shadow: 2px 0px 5px ${({ theme }) => theme.colors.shadow};
`
const InnerBox = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  height: 90px;
  padding: 20px;
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
const MenuBox = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
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
  font-size: 20px;
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
const Path = styled.path.attrs(({ theme }) => ({
  fill: theme.colors.primary,
}))``

export function HeaderMobile(props: Props) {
  const { onChangeLanguage } = props
  const { t, i18n } = useTranslation()
  const [menuOpen, setMenuOpen] = useState<boolean>(false)
  const toggleMenu = useCallback(() => {
    setMenuOpen(!menuOpen)
  }, [menuOpen])

  return (
    <Headroom>
      <Box>
        <InnerBox>
          <Brand>
            <LogoLink to="/">
              <Logo size={46} />
            </LogoLink>
          </Brand>

          <TicketBox>
            <LinkButton
              onClick={() =>
                ga("send", "event", "Conversion", "OpenTickets", "HeaderMobile")
              }
              // color="primary"
              to="#"
              size="inline"
            >
              {t("tickets")}
            </LinkButton>
          </TicketBox>

          <svg
            width={48}
            height={48}
            viewBox="0,0,100,100"
            onTouchEnd={toggleMenu}
          >
            {menuOpen ? (
              <Path
                d={[
                  `M0,5 L5,0 L100,95 L95,100 L0,5`,
                  `M95,0 L100,5 L5,100 L0,95 L95,0`,
                ].join(" ")}
              />
            ) : (
              <Path
                d={[
                  `M0,0 L100,0 L100,10 L0,10 L0,0`,
                  `M0,45 L100,45 L100,55 L0,55 L0,0`,
                  `M0,90 L100,90 L100,100 L0,100 L0,0`,
                ].join(" ")}
              />
            )}
          </svg>
        </InnerBox>
        {menuOpen && (
          <MenuBox>
            <LanguageSwitchBox>
              <LanguageSwitch
                languages={{
                  ja: "日本語",
                  en: "EN",
                }}
                currentLanguage={i18n.language}
                onChange={onChangeLanguage}
              />
            </LanguageSwitchBox>
            <MenuItem to="speakers">{t("speakers")}</MenuItem>
            <MenuItem to="venue">{t("venue")}</MenuItem>
            <MenuItem to="schedule">{t("schedule")}</MenuItem>
            <MenuItem to="sponsors">{t("sponsors")}</MenuItem>
          </MenuBox>
        )}
      </Box>
    </Headroom>
  )
}

import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { useTranslation } from "react-i18next"

import { Logo } from "./Logo"
import { LanguageSwitch } from "./LanguageSwitch"
import { LinkButton as _LinkButton } from "./LinkButton"

type Props = {
  siteTitle: string
  onChangeLanguage: (lang: string) => void
}

const Box = styled.header`
  display: flex;
  position: sticky;
  background-color: ${({ theme }) => theme.colors.base};
  z-index: 1;
  top: 0;
  height: 60;
  box-shadow: 2px 0px 5px ${({ theme }) => theme.colors.shadow};
`
const Brand = styled.h1`
  display: flex;
  align-items: center;
  margin: 0;
  padding: 20px 40px;
`
const MenuBox = styled.div`
  flex: 1;
  display: flex;
`
const MenuItem = styled(Link)`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  text-transform: uppercase;
`
const LinkButton = styled(_LinkButton)``

export function Header(props: Props) {
  const { onChangeLanguage } = props
  const { t, i18n } = useTranslation()

  return (
    <Box>
      <Brand>
        <>
          <Link to="/">
            <Logo size={46} />
          </Link>
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
        <MenuItem to="speakers">{t("speakers")}</MenuItem>
        <MenuItem to="venue">{t("venue")}</MenuItem>
        <MenuItem to="schedule">{t("schedule")}</MenuItem>
        <MenuItem to="sponsors">{t("sponsors")}</MenuItem>
        <LinkButton to="https://example.com" color="primary">
          {t("tickets")}
        </LinkButton>
      </MenuBox>
    </Box>
  )
}

import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { useTranslation } from "react-i18next"

import { Logo } from "./Logo"
import { LinkButton as _LinkButton } from "./LinkButton"

type Props = {
  siteTitle: string
}

const Box = styled.header`
  display: flex;
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
`
const LinkButton = styled(_LinkButton)``

export function Header(props: Props) {
  const { siteTitle } = props
  const { t } = useTranslation()

  return (
    <Box>
      <Logo />
      <h1>
        <Link to="/">{siteTitle}</Link>
      </h1>

      <MenuBox>
        <MenuItem to="speakers">{t("speakers")}</MenuItem>
        <MenuItem to="venue">{t("venue")}</MenuItem>
        <MenuItem to="schedule">{t("schedule")}</MenuItem>
        <MenuItem to="timetable">{t("timetable")}</MenuItem>
        <MenuItem to="sponsors">{t("sponsors")}</MenuItem>
        <MenuItem to="about">{t("about")}</MenuItem>
        <LinkButton to="https://example.com" color="primary">
          {t("tickets")}
        </LinkButton>
      </MenuBox>
    </Box>
  )
}

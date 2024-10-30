import React from "react"
import styled from "styled-components"
import { GatsbyLinkProps, Link } from "gatsby"

import { Logo } from "./Logo"
import { LanguageSwitch } from "./LanguageSwitch"
import { LinkButton } from "./LinkButton"
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
  position: sticky;
  background-color: ${({ theme }) => theme.colors.base};
  z-index: 1;
  top: 0;
  height: 90px;
  box-shadow: 2px 0px 5px ${({ theme }) => theme.colors.shadow};

  @media print {
    display: none;
  }
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
const MenuItemWrap = styled(Link)`
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
  cursor: pointer;

  span :last-of-type {
    margin-right: 40px;
  }
  & span {
    white-space: nowrap;
    display: inline-block;
    border-bottom: 4px solid transparent;
  }
  &:hover span {
    border-color: ${({ theme }) => theme.colors.disabled};
  }
  &[aria-current="page"] span {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`

function MenuItem<TState>({
  children,
  to,
  ...Props
}: Omit<GatsbyLinkProps<TState>, "ref">) {
  return (
    <MenuItemWrap to={to} {...Props}>
      <span>{children}</span>
    </MenuItemWrap>
  )
}

const TicketBox = styled.div`
  flex: 1;
  display: flex;
  align-self: stretch;
  max-width: 200px;

  a span {
    border-bottom: 4px solid transparent;
  }
  &:hover a span {
    border-color: ${({ theme }) => theme.colors.primaryText};
  }
`

export function Header(props: Props) {
  const {
    onChangeLanguage,
    ticketUrl,
    enableSpeakers,
    enableVenue,
    enableSchedule,
    enableSponsors,
  } = props
  return (
    <Box>
      <InnerBox>
        <Brand>
          <>
            <LogoLink to="/">
              <Logo size={46} />
            </LogoLink>
            <LanguageSwitch
              languages={{
                ja: "日本語",
                en: "EN",
              }}
              onChange={onChangeLanguage}
            />
          </>
        </Brand>

        <MenuBox>
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
          {ticketUrl ? (
            <TicketBox>
              <LinkButton color="primary" to={ticketUrl} size="inline">
                <span>
                  <I18N k="tickets" />
                </span>
              </LinkButton>
            </TicketBox>
          ) : null}
        </MenuBox>
      </InnerBox>
    </Box>
  )
}

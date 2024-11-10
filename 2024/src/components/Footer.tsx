import React from "react"
import styled from "styled-components"
import { useTranslation } from "react-i18next"
import { graphql, Link as _Link, useStaticQuery } from "gatsby"
import { OutboundLink } from "gatsby-plugin-google-analytics"

type Props = {}

const Box = styled.footer`
  padding: 40px 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: ${({ theme }) => theme.fonts.text};
  background-color: ${({ theme }) => theme.colors.border};

  @media print {
    display: none;
  }
`
const LinksBox = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  list-style-type: none;

  &,
  & > li {
    margin: 0;
    padding: 0;
  }
  & > li::after {
    margin: 0px 8px;
    content: "|";
    color: #575757;
  }
  & > li:last-child::after {
    content: "";
  }

  ${({ theme }) => theme.breakpoints.mobile} {
    flex-direction: column;
    align-items: center;
    margin-bottom: 1em;
    & > li::after {
      content: "";
    }
  }
`
const Link = styled(_Link)`
  line-height: 1.8em;
  line-height: 1.8em;
  color: #575757;
  text-decoration: none;
  &:hover {
    color: #000;
  }
`
const ExternalLink = styled(OutboundLink)`
  line-height: 1.8em;
  color: #575757;
  text-decoration: none;
  &:hover {
    color: #000;
  }

  ${({ theme }) => theme.breakpoints.mobile} {
    ::after {
      content: "" !important;
    }
  }
`

export function Footer(_props: Props) {
  const { t } = useTranslation()
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          previousFiscalYear
        }
      }
    }
  `)

  return (
    <Box>
      <LinksBox>
        <li>
          <ExternalLink href="https://nodejs.org/" target="_blank">
            Node.js
          </ExternalLink>
        </li>
        <li>
          <ExternalLink
            href={`https://jsconf.jp/${site.siteMetadata.previousFiscalYear}/`}
            target="_blank"
          >
            JSConf JP {site.siteMetadata.previousFiscalYear}
          </ExternalLink>
        </li>
        <li>
          <ExternalLink href="https://nodejs.jp/" target="_blank">
            Japan Node.js Association
          </ExternalLink>
        </li>
        <li>
          <Link to="/code-of-conduct/">{t("code-of-conduct")}</Link>
        </li>
        <li>
          <Link to="/specified-commercial-transactions-act/">
            {t("specified-commercial-transactions-act")}
          </Link>
        </li>
      </LinksBox>
      <small>&copy; 2019-{new Date().getFullYear()} JSConf JP</small>
      <small>Company Address: {t("jna-address")}</small>
    </Box>
  )
}

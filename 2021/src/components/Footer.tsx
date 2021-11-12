import React from "react"
import styled from "styled-components"
import { useTranslation } from "react-i18next"
import { graphql, Link as _Link, useStaticQuery } from "gatsby"
import { OutboundLink } from "gatsby-plugin-google-analytics"

type Props = {}

const Box = styled.footer`
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.border};
`
const LinksBox = styled.div`
  display: flex;

  & > a::after {
    margin: 0px 8px;
    content: "|";
  }
  & > a:last-child::after {
    content: "";
  }

  ${({ theme }) => theme.breakpoints.mobile} {
    flex-direction: column;
  }
`
const Link = styled(_Link)`
  line-height: 1.8em;
  ${({ theme }) => theme.breakpoints.mobile} {
    ::after {
      content: "" !important;
    }
  }
`
const ExternalLink = styled(OutboundLink)`
  line-height: 1.8em;
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
        <ExternalLink href="https://nodejs.org/" target="_blank">
          Node.js
        </ExternalLink>
        <ExternalLink
          href={`https://jsconf.jp/${site.siteMetadata.previousFiscalYear}/`}
          target="_blank"
        >
          JSConf JP {site.siteMetadata.previousFiscalYear}
        </ExternalLink>
        <ExternalLink href="https://nodejs.jp/" target="_blank">
          Japan Node.js Association
        </ExternalLink>
        <Link to="/code-of-conduct/">{t("code-of-conduct")}</Link>
        <Link to="/jp-specified-commercial-transactions-act/">
          {t("jp-specified-commercial-transactions-act")}
        </Link>
      </LinksBox>
      <small>&copy; 2019-{new Date().getFullYear()} JSConf JP</small>
      <small>Company Address: {t("jna-address")}</small>
    </Box>
  )
}

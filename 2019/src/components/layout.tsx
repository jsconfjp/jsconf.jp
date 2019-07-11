/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          twitter
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <main>{children}</main>
      <footer>
        &copy; 2019-{new Date().getFullYear()}{" "}
        <a
          target="_blank"
          href={`https://twitter.com/${data.site.siteMetadata.twitter}`}
        >
          @{data.site.siteMetadata.twitter}
        </a>
      </footer>
    </>
  )
}

export default Layout

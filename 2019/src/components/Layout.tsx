import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { Header } from "./Header"
import "./layout.css"

type Props = {
  children: React.ReactNode
}

export function Layout({ children }: Props) {
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

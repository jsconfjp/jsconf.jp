import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { useTranslation } from "react-i18next"

import { Layout } from "../components/Layout"
import { SEO } from "../components/Seo"

export default function SponsorsPage() {
  const data = useStaticQuery(graphql`
    query Sponsors {
      allSponsorsYaml {
        edges {
          node {
            name
            url
            pr
          }
        }
      }
    }
  `)
  const { t } = useTranslation()

  return (
    <Layout>
      <SEO title="Sponsors" />
      {data.allSponsorsYaml.edges.map(({ node }) => (
        <div key={node.name}>
          <h2>{node.name}</h2>
          <a href={node.url} target="_blank">
            {node.url}
          </a>
          <p>{node.name}</p>
        </div>
      ))}
    </Layout>
  )
}

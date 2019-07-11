import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { useTranslation } from "react-i18next"

import { Layout } from "../components/Layout"
import { SEO } from "../components/Seo"

export default function AboutUsPage() {
  const data = useStaticQuery(graphql`
    query Members {
      allMembersYaml {
        edges {
          node {
            twitter
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="About us" />
      {data.allMembersYaml.edges.map(({ node }) => (
        <div key={node}>
          <img src={`https://twitter.com/${node.twitter}/profile_image`} />
          <a target="_blank" href={`https://twitter.com/${node.twitter}`}>
            @{node.twitter}
          </a>
        </div>
      ))}
    </Layout>
  )
}

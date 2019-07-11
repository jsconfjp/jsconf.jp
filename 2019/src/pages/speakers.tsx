import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { useTranslation } from "react-i18next"

import { Layout } from "../components/Layout"
import { SEO } from "../components/Seo"

export default function SpeakersPage() {
  const data = useStaticQuery(graphql`
    query Speakers {
      allSpeakersYaml {
        edges {
          node {
            featured
            name
            github
            twitter
            photo
            biography
          }
        }
      }
    }
  `)
  const { t } = useTranslation()

  return (
    <Layout>
      <SEO title="Speakers" />
      {data.allSpeakersYaml.edges.map(({ node }) => (
        <div key={node.name}>
          <h2>{node.name}</h2>
          <img src={node.photo} width="100" />
          <p>{node.biography}</p>
          <p>
            <a href={node.github} target="_blank">
              GitHub
            </a>
            <a href={node.twitter} target="_blank">
              Twitter
            </a>
          </p>
        </div>
      ))}
    </Layout>
  )
}

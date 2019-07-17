import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { useTranslation } from "react-i18next"

import { Layout } from "../components/Layout"
import { SEO } from "../components/Seo"
import { Speaker } from "../components/Speaker"

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
        <Speaker
          key={node.name}
          name={node.name}
          photo={node.photo}
          biography={node.biography}
          github={node.github}
          twitter={node.twitter}
        />
      ))}
    </Layout>
  )
}

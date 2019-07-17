import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { useTranslation } from "react-i18next"

import { Layout } from "../components/Layout"
import { SEO } from "../components/Seo"
import { SpeakerList } from "../components/SpeakerList"

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
  const speakers = data.allSpeakersYaml.edges.map(({ node }: any) => node)

  return (
    <Layout>
      <SEO title="Speakers" />
      <SpeakerList speakers={speakers} />
    </Layout>
  )
}

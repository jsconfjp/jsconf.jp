import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { useTranslation } from "react-i18next"

import { Layout } from "../components/Layout"
import { SEO } from "../components/Seo"
import { Title } from "../components/Title"
import { SponsorList } from "../components/SponsorList"

export default function SponsorsPage() {
  const data = useStaticQuery(graphql`
    query Sponsors {
      allSponsorsYaml {
        edges {
          node {
            name
            grade
            url
            logoUrl
          }
        }
      }
    }
  `)
  const sponsors = data.allSponsorsYaml.edges.map(({ node }) => node)
  const { t } = useTranslation()

  return (
    <Layout>
      <SEO title="Sponsors" />
      <Title>{t("sponsors")}</Title>
      <SponsorList sponsors={sponsors} />
    </Layout>
  )
}
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { useTranslation } from "react-i18next"

import { Layout } from "../components/Layout"
import { SEO } from "../components/Seo"
import { Hero } from "../components/Hero"
import { SubTitle } from "../components/SubTitle"
import { SpeakerList } from "../components/SpeakerList"
import { LinkButton } from "../components/LinkButton"

export default function IndexPage() {
  const { t } = useTranslation()
  const guestSpeakers = useStaticQuery(graphql`
    query GuestSpeakers {
      allSpeakersYaml(filter: { featured: { eq: true } }) {
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
  const speakers = guestSpeakers.allSpeakersYaml.edges.map(({ node }) => node)

  return (
    <Layout>
      <SEO title="Home" />
      <Hero
        title={t("siteName")}
        subTitle={t("festivalPeriod")}
        description={t("description")}
      />
      <SubTitle>{t("guestSpeakers")}</SubTitle>
      <SpeakerList speakers={speakers} />
      <LinkButton theme="primary" to="/speakers">
        {t("goToGuests")}
      </LinkButton>
    </Layout>
  )
}

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { useTranslation } from "react-i18next"

import { Layout } from "../components/Layout"
import { SEO } from "../components/Seo"
import { Hero } from "../components/Hero"
import { Map } from "../components/Map"
import { Address } from "../components/Address"
import { SubTitle } from "../components/SubTitle"
import { SpeakerList } from "../components/SpeakerList"
import { SponsorList } from "../components/SponsorList"
import { LinkButton } from "../components/LinkButton"

export default function IndexPage() {
  const { t } = useTranslation()
  const { allSpeakersYaml, allSponsorsYaml } = useStaticQuery(graphql`
    query {
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
  const guestSpeakers = allSpeakersYaml.edges.map(({ node }) => node)
  const sponsors = allSponsorsYaml.edges.map(({ node }) => node)

  return (
    <Layout>
      <SEO title="Home" />
      <Hero
        title={t("siteName")}
        subTitle={t("festivalPeriod")}
        description={t("description")}
      />

      <SubTitle>{t("guestSpeakers")}</SubTitle>
      <SpeakerList speakers={guestSpeakers} />
      <LinkButton theme="primary" to="/speakers">
        {t("goToGuests")}
      </LinkButton>

      <SubTitle>{t("schedule")}</SubTitle>
      <LinkButton theme="secondary" to="/timetable#day1">
        {t("day1")}
      </LinkButton>
      <LinkButton theme="secondary" to="/timetable#day2">
        {t("day2")}
      </LinkButton>

      <SubTitle>{t("tickets")}</SubTitle>
      <p>{t("ticketsDescription")}</p>
      <LinkButton theme="primary">{t("comingSoon")}</LinkButton>

      <SubTitle>{t("venue")}</SubTitle>
      <Map width={600} height={450} />
      <Address />
      <LinkButton theme="primary" to="/venue">
        {t("moreDetails")}
      </LinkButton>

      <SubTitle>{t("sponsors")}</SubTitle>
      <SponsorList sponsors={sponsors} />
    </Layout>
  )
}

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
import { Button } from "../components/Button"
import { Card } from "../components/Card"
import { Centerize } from "../components/Centerize"

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
            photoURL
            biography
          }
        }
      }
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
  const guestSpeakers = allSpeakersYaml.edges.map(({ node }) => node)
  const sponsors = allSponsorsYaml.edges.map(({ node }) => node)

  return (
    <Layout>
      <SEO title="Home" />
      <Centerize>
        <Hero
          title={t("siteName")}
          subTitle={t("festivalPeriod")}
          description={t("description")}
        />
      </Centerize>

      <Card>
        <Centerize>
          <SubTitle>{t("guestSpeakers")}</SubTitle>
          <SpeakerList speakers={guestSpeakers} />
          <LinkButton color="primary" to="/speakers">
            {t("goToGuests")}
          </LinkButton>
        </Centerize>
      </Card>

      <Centerize>
        <SubTitle>{t("schedule")}</SubTitle>
        <div style={{ display: "flex" }}>
          <LinkButton color="secondary" to="/timetable#day1">
            {t("day1")}
          </LinkButton>
          <LinkButton color="secondary" to="/timetable#day2">
            {t("day2")}
          </LinkButton>
        </div>
      </Centerize>

      <Card>
        <Centerize>
          <SubTitle>{t("tickets")}</SubTitle>
          <p>{t("ticketsDescription")}</p>
          <Button color="primary" onClick={() => {}}>
            {t("comingSoon")}
          </Button>
        </Centerize>
      </Card>

      <Centerize>
        <SubTitle>{t("venue")}</SubTitle>
        <Map width={600} height={450} />
        <Address />
        <LinkButton color="primary" to="/venue">
          {t("moreDetails")}
        </LinkButton>
      </Centerize>

      <Centerize>
        <SubTitle>{t("sponsors")}</SubTitle>
        <SponsorList sponsors={sponsors} />
      </Centerize>
    </Layout>
  )
}

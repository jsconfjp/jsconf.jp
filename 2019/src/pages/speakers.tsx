import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { useTranslation } from "react-i18next"

import { Layout } from "../components/Layout"
import { SEO } from "../components/Seo"
import { Title } from "../components/Title"
import { SpeakerList } from "../components/SpeakerList"
import { ResponsiveBox } from "../components/ResponsiveBox"
import { Breadcrumb } from "../components/Breadcrumb"

export default function SpeakersPage() {
  const { allSpeakersYaml, allTalksYaml } = useStaticQuery(graphql`
    query Speakers {
      allSpeakersYaml {
        edges {
          node {
            uuid
            name
            biography
            biographyJa
            photoURL
          }
        }
      }
      allTalksYaml {
        edges {
          node {
            uuid
            title
            titleJa
            description
            descriptionJa
            spokenLanguage
            slideLanguage
            speakerIDs
          }
        }
      }
    }
  `)
  const { t } = useTranslation()
  const speakers = allSpeakersYaml.edges.map(({ node }: any) => node)
  const talks = allTalksYaml.edges.map(({ node }: any) => node)

  return (
    <Layout>
      <SEO title={t("guestSpeakers")} description={t("speakers.description")} />
      <ResponsiveBox>
        <Breadcrumb path={[t("speakers")]} />
        <Title>{t("speakers")}</Title>
        <SpeakerList speakers={speakers} talks={talks} />
      </ResponsiveBox>
    </Layout>
  )
}

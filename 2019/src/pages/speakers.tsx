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
  const data = useStaticQuery(graphql`
    query Speakers {
      allSpeakersYaml {
        edges {
          node {
            uuid
            featured
            name
            twitter
            photoURL
            talkTitle
            talkTitleJa
          }
        }
      }
    }
  `)
  const { t } = useTranslation()
  const speakers = data.allSpeakersYaml.edges.map(({ node }: any) => node)

  return (
    <Layout>
      <SEO title={t("guestSpeakers")} description={t("speakers.description")} />
      <ResponsiveBox>
        <Breadcrumb path={[t("speakers")]} />
        <Title>{t("speakers")}</Title>
        <SpeakerList speakers={speakers} />
      </ResponsiveBox>
    </Layout>
  )
}

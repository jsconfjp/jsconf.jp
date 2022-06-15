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
  const { allSpeakersYaml, allTalksYaml, allFile } = useStaticQuery(graphql`
    query Speakers {
      allSpeakersYaml {
        edges {
          node {
            uuid
            name
            biography
            biographyJa
            presentations
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
      allFile(filter: { relativePath: { regex: "/speakers/" } }) {
        nodes {
          name
          childImageSharp {
            gatsbyImageData(
              width: 524
              height: 524
              placeholder: BLURRED
              layout: CONSTRAINED
            )
          }
        }
      }
    }
  `)
  const { t } = useTranslation()
  const speakers = allSpeakersYaml.edges.map(({ node }: any) => node)
  const avatars = allFile.nodes
    .filter((avatar: any) => avatar.childImageSharp)
    .map((avatar: any) => ({
      uuid: avatar.name,
      ...avatar.childImageSharp.gatsbyImageData
    }))
  const talks = allTalksYaml.edges.map(({ node }: any) => node)

  return (
    <Layout>
      <SEO title={t("speakers")} description={t("speakers.description")} />
      <ResponsiveBox>
        <Breadcrumb path={[t("speakers")]} />
        <Title>{t("speakers")}</Title>
        <SpeakerList speakers={speakers} avatars={avatars} talks={talks} />
      </ResponsiveBox>
    </Layout>
  )
}

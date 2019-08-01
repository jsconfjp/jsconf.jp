import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { useTranslation } from "react-i18next"
import { OutboundLink } from "gatsby-plugin-google-analytics"

import { Layout } from "../components/Layout"
import { SEO } from "../components/Seo"
import { Title } from "../components/Title"
import { ResponsiveBox } from "../components/ResponsiveBox"
import { Breadcrumb } from "../components/Breadcrumb"

export default function AboutUsPage() {
  const { t } = useTranslation()
  const data = useStaticQuery(graphql`
    query Members {
      allMembersYaml {
        edges {
          node {
            twitter
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title={t("aboutUs")} description={t("about.description")} />
      <ResponsiveBox>
        <Breadcrumb path={[t("aboutUs")]} />
        <Title>{t("aboutUs")}</Title>
        {data.allMembersYaml.edges.map(({ node }) => (
          <div key={node}>
            <img src={`https://twitter.com/${node.twitter}/profile_image`} />
            <OutboundLink
              target="_blank"
              href={`https://twitter.com/${node.twitter}`}
            >
              @{node.twitter}
            </OutboundLink>
          </div>
        ))}
      </ResponsiveBox>
    </Layout>
  )
}

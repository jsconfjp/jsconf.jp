import React from "react"
// import { useStaticQuery, graphql } from "gatsby"
import { useTranslation } from "react-i18next"

import { Layout } from "../components/Layout"
import { SEO } from "../components/Seo"
import { Title } from "../components/Title"
// import { SponsorList } from "../components/SponsorList"
import { ResponsiveBox } from "../components/ResponsiveBox"
import { Breadcrumb } from "../components/Breadcrumb"

export default function SponsorsPage() {
  // const data = useStaticQuery(graphql`
  //   query Sponsors {
  //     allSponsorsYaml {
  //       edges {
  //         node {
  //           name
  //           grade
  //           url
  //           logoUrl
  //           prText
  //         }
  //       }
  //     }
  //   }
  // `)
  // const sponsors = data.allSponsorsYaml.edges.map(({ node }: any) => node)
  const { t } = useTranslation()

  return (
    <Layout>
      <SEO title={t("sponsors")} description={t("sponsors.description")} />
      <ResponsiveBox>
        <Breadcrumb path={[t("sponsors")]} />
        <Title>{t("sponsors")}</Title>
        {/* <SponsorList sponsors={sponsors} showPrText /> */}
      </ResponsiveBox>
    </Layout>
  )
}

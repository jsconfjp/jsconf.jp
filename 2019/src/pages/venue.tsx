import React from "react"
import { useTranslation } from "react-i18next"

import { Layout } from "../components/Layout"
import { SEO } from "../components/Seo"
import { Title } from "../components/Title"
import { Map } from "../components/Map"
import { Address } from "../components/Address"
import { Accessibility } from "../components/Accessibility"
import { ResponsiveBox } from "../components/ResponsiveBox"
import { Breadcrumb } from "../components/Breadcrumb"

export default function VenuePage() {
  const { t } = useTranslation()

  return (
    <Layout>
      <SEO title={t("venue")} description={t("venue.address")} />
      <ResponsiveBox>
        <Breadcrumb path={[t("venue")]} />

        <Title>{t("venue")}</Title>
        <Map width={940} height={500} />
        <Address summary={false} />
        <Accessibility />
      </ResponsiveBox>
    </Layout>
  )
}

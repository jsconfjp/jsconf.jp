import React from "react"
import { useTranslation } from "react-i18next"

import { Layout } from "../components/Layout"
import { SEO } from "../components/Seo"
import { Title } from "../components/Title"
import { Map } from "../components/Map"
import { VenueMap } from "../components/VenueMap"
import { Address } from "../components/Address"
import { ResponsiveBox } from "../components/ResponsiveBox"
import { Breadcrumb } from "../components/Breadcrumb"

export const Head = () => {
  const { t } = useTranslation()
  return <SEO title={t("venue")} description={t("venue.address")} />
}

export default function VenuePage() {
  const { t } = useTranslation()

  return (
    <Layout>
      <ResponsiveBox>
        <Breadcrumb path={[t("venue")]} />

        <Title>{t("venue")}</Title>
        <Map width={940} height={500} title={t("venue")} />
        <VenueMap width={940} height={500} />
        <Address summary={false} />
      </ResponsiveBox>
    </Layout>
  )
}


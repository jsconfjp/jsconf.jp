import React from "react"
import { useTranslation } from "react-i18next"

import { Layout } from "../components/Layout"
import { SEO } from "../components/Seo"
import { Title } from "../components/Title"
import { Map } from "../components/Map"
import { Address } from "../components/Address"

export default function VenuePage() {
  const { t } = useTranslation()

  return (
    <Layout>
      <SEO title="Venue" />
      <Title>{t("venue")}</Title>
      <Map width={600} height={450} />
      <Address />
    </Layout>
  )
}

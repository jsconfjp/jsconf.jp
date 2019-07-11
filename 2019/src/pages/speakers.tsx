import React from "react"
import { useTranslation } from "react-i18next"

import { Layout } from "../components/Layout"
import { SEO } from "../components/Seo"

export default function SpeakersPage() {
  const { t } = useTranslation()
  return (
    <Layout>
      <SEO title="Speakers" />
      TODO: Speakers
    </Layout>
  )
}

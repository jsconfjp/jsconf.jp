import React from "react"
import { useTranslation } from "react-i18next"

import { Layout } from "../components/Layout"
import { SEO } from "../components/Seo"

export default function SchedulePage() {
  const { t } = useTranslation()
  return (
    <Layout>
      <SEO title="Schedule" />
      TODO: Schedule
    </Layout>
  )
}

import React from "react"
import { useTranslation } from "react-i18next"

import { Layout } from "../components/Layout"
import { SEO } from "../components/Seo"
import { Title } from "../components/Title"

export default function SchedulePage() {
  const { t } = useTranslation()
  return (
    <Layout>
      <SEO title="Schedule" />
      <Title>{t("schedule")}</Title>
      TODO: Schedule
    </Layout>
  )
}

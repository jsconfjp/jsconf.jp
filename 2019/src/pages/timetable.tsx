import React from "react"
import { useTranslation } from "react-i18next"

import { Layout } from "../components/Layout"
import { Title } from "../components/Title"
import { SEO } from "../components/Seo"

export default function TimetablePage() {
  const { t } = useTranslation()
  return (
    <Layout>
      <SEO title="Timetable" />
      <Title>{t("timetable")}</Title>
      TODO: Timetable
    </Layout>
  )
}

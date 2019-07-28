import React from "react"
import { useTranslation } from "react-i18next"

import { Layout } from "../components/Layout"
import { Title } from "../components/Title"
import { SEO } from "../components/Seo"
import { ResponsiveBox } from "../components/ResponsiveBox"
import { Breadcrumb } from "../components/Breadcrumb"

export default function TimetablePage() {
  const { t } = useTranslation()
  return (
    <Layout>
      <SEO title="Timetable" />
      <ResponsiveBox>
        <Breadcrumb path={[t("timetable")]} />
        <Title>{t("timetable")}</Title>
        TODO: Timetable
      </ResponsiveBox>
    </Layout>
  )
}

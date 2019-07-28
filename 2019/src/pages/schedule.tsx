import React from "react"
import { useTranslation } from "react-i18next"

import { Layout } from "../components/Layout"
import { SEO } from "../components/Seo"
import { Title } from "../components/Title"
import { ResponsiveBox } from "../components/ResponsiveBox"
import { Breadcrumb } from "../components/Breadcrumb"

export default function SchedulePage() {
  const { t } = useTranslation()
  return (
    <Layout>
      <SEO title="Schedule" />
      <ResponsiveBox>
        <Breadcrumb path={[t("schedule")]} />
        <Title>{t("schedule")}</Title>
        TODO: Schedule
      </ResponsiveBox>
    </Layout>
  )
}

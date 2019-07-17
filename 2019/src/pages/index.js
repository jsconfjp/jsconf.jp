import React from "react"
import { useTranslation } from "react-i18next";

import { Layout } from "../components/Layout"
import { Hero } from "../components/Hero"
import { SEO } from "../components/Seo"

export default function IndexPage() {
  const { t } = useTranslation()

  return (
    <Layout>
      <SEO title="Home" />
      <Hero
        title={t('siteName')}
        subTitle={t('festivalPeriod')}
        description={t('description')}
      />
    </Layout>
  )
}

import React from "react"
import { Link } from "gatsby"
import { useTranslation } from "react-i18next";

import { Layout } from "../components/Layout"
import { SEO } from "../components/Seo"

export default function IndexPage() {
  const { t } = useTranslation()
  return (
    <Layout>
      <SEO title="Home" />
      <h1>{t('welcome')}</h1>
    </Layout>
  )
}

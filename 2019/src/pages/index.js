import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { useTranslation } from "react-i18next";

const IndexPage = () => {
  const { t } = useTranslation()
  return (
    <Layout>
      <SEO title="Home" />
      <h1>{t('welcome')}</h1>
    </Layout>
  )
}

export default IndexPage

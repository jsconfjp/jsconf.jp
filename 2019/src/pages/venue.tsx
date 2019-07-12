import React from "react"
import { useTranslation } from "react-i18next"

import { Layout } from "../components/Layout"
import { SEO } from "../components/Seo"

export default function VenuePage() {
  const { t } = useTranslation()
  return (
    <Layout>
      <SEO title="Venue" />
      <iframe
        width="600"
        height="450"
        style={{ border: 0 }}
        src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ6Xx_rh-MGGAR3sDINOeBYw8&key=AIzaSyAhtEqpuBA3ChFU30d4A1bSODO-anJ54Vo"
        frameborder="0"
        allowfullscreen
      ></iframe>
      <p>
        <h3>{t("venue.name")}</h3>
        <small>{t("venue.address")}</small>
        <br />
        <a target="_blank" href={t("venue.url")}>
          {t("venue.url")}
        </a>
      </p>
    </Layout>
  )
}

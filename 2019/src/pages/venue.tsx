import React from "react"

import { Layout } from "../components/Layout"
import { SEO } from "../components/Seo"
import { Map } from "../components/Map"
import { Address } from "../components/Address"

export default function VenuePage() {
  return (
    <Layout>
      <SEO title="Venue" />
      <Map width={600} height={450} />
      <Address />
    </Layout>
  )
}

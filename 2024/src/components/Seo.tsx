import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { useTranslation } from "react-i18next"

type MetaProps = JSX.IntrinsicElements["meta"]

type Props = {
  description?: string | null
  lang?: Languages
  meta?: MetaProps[]
  title?: string | null
  ogImage?: string
}

export function SEO({ description, ogImage, meta, title }: Props) {
  meta ??= []
  description ??= ""

  const { site, logo } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          author
          siteUrl
        }
      }
      logo: file(relativePath: { in: "logo2024.png" }) {
        publicURL
      }
    }
  `)
  const {
    i18n: { language },
  } = useTranslation()
  const lang = language ?? "en"
  const defaultOgImage = `${site.siteMetadata.siteUrl}${logo.publicURL}`
  const metaTitle = title || site.siteMetadata.title
  const metaDescription = description || site.siteMetadata.description
  return (
    <>
      <html lang={lang} />
      <title>
        {title
          ? `${title} | ${site.siteMetadata.title}`
          : site.siteMetadata.title}
      </title>
      <meta name="description" content={metaDescription} />
      <meta name="og:description" content={metaDescription} />
      <meta name="og:title" content={metaTitle} />
      <meta name="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={site.siteMetadata.author} />
      <meta name="twitter:title" content={title ?? site.siteMetadata.title} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="viewport" content="width=device-width" />
      <meta
        name="og:image"
        content={
          ogImage ? `${site.siteMetadata.siteUrl}${ogImage}` : defaultOgImage
        }
      />
    </>
  )
}

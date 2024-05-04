import React from "react"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

type MetaProps = JSX.IntrinsicElements["meta"]

type Props = {
  description?: string | null
  lang: Languages
  meta: MetaProps[]
  title?: string | null
  ogImage?: string
}

export function SEO({ description, ogImage, lang, meta, title }: Props) {
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
      logo: file(relativePath: { in: "logo.png" }) {
        publicURL
      }
    }
  `)
  const defaultOgImage = `${site.siteMetadata.siteUrl}${logo.publicURL}`
  const metaTitle = title || site.siteMetadata.title
  const metaDescription = description || site.siteMetadata.description
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      defaultTitle={site.siteMetadata.title}
      title={title ?? undefined}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={(
        [
          {
            name: `viewport`,
            content: `width=device-width`,
          },
          {
            name: `description`,
            content: metaDescription,
          },
          {
            property: `og:title`,
            content: metaTitle,
          },
          {
            property: `og:description`,
            content: metaDescription,
          },
          {
            property: `og:image`,
            content: ogImage
              ? `${site.siteMetadata.siteUrl}${ogImage}`
              : defaultOgImage,
          },
          {
            property: `og:type`,
            content: `website`,
          },
          {
            name: `twitter:card`,
            content: `summary`,
          },
          {
            name: `twitter:creator`,
            content: site.siteMetadata.author,
          },
          {
            name: `twitter:title`,
            content: title,
          },
          {
            name: `twitter:description`,
            content: metaDescription,
          },
        ] as MetaProps[]
      ).concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

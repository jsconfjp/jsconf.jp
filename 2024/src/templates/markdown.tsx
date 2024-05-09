import React from "react"
import styled from "styled-components"

import { Layout } from "../components/Layout"
import { SEO } from "../components/Seo"
import { Title } from "../components/Title"
import { ResponsiveBox } from "../components/ResponsiveBox"
import { Breadcrumb } from "../components/Breadcrumb"
import { useEnOrJa } from "../util/languages"

type Language = {
  fields: {
    slug: string
  }
  frontmatter: {
    title: string
  }
  html: string
}

type Props = {
  pageContext: {
    post: {
      en: Language
      ja: Language
      unknown: Language
    }
  }
}

const Box = styled.div`
  font-family: ${({ theme }) => theme.fonts.header};
`

export default function Markdown(props: Props) {
  const {
    pageContext: { post },
  } = props
  const enOrJa = useEnOrJa()
  const data = enOrJa(post.en, post.ja) ?? post.unknown
  const {
    frontmatter: { title },
    html,
  } = data

  return (
    <Layout>
      <SEO title={title} />
      <ResponsiveBox>
        <Breadcrumb path={[title]} />
        <Title>{title}</Title>
        <Box
          dangerouslySetInnerHTML={{
            __html: html,
          }}
        />
      </ResponsiveBox>
    </Layout>
  )
}

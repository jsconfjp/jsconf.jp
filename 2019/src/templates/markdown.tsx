import React from "react"
import styled from "styled-components"

import { Layout } from "../components/Layout"
import { SEO } from "../components/Seo"
import { Title } from "../components/Title"
import { ResponsiveBox } from "../components/ResponsiveBox"
import { Breadcrumb } from "../components/Breadcrumb"

type Props = {
  pageContext: {
    post: {
      fields: {
        slug: string
      }
      frontmatter: {
        title: string
      }
      html: string
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
  const {
    frontmatter: { title },
    html,
  } = post

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

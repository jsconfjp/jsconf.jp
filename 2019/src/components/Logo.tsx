import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

type Props = {
  size: number
}

export function Logo(props: Props) {
  const { size } = props
  const { file } = useStaticQuery(
    graphql`
      query {
        file(relativePath: { eq: "logo.png" }) {
          childImageSharp {
            fixed(width: 125, height: 125) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `,
  )

  return (
    <Img
      style={{ width: size, height: size }}
      fixed={file.childImageSharp.fixed}
    />
  )
}

Logo.defaultProps = {
  size: 125,
}

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

type Props = {}

export function Logo(_props: Props) {
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
        `
    )

    return (
        <Img fixed={file.childImageSharp.fixed} />
    )
}

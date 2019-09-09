/* eslint-env node */

const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const mdTemplate = path.resolve(`./src/templates/markdown.tsx`)
    const speakerTemplate = path.resolve(`./src/templates/speaker.tsx`)
    resolve(
      graphql(`
        query {
          allMarkdownRemark {
            edges {
              node {
                fields {
                  slug
                }
                frontmatter {
                  title
                }
                html
              }
            }
          }
          allSpeakersYaml {
            edges {
              node {
                uuid
                name
                biography
                biographyJa
                photoURL
                talkTitle
                talkTitleJa
                talkDescription
                talkDescriptionJa
                spokenLanguage
                slideLanguage
              }
            }
          }
        }
      `).then(result => {
        if (result.errors) {
          reject(result.errors)
        }

        const posts = result.data.allMarkdownRemark.edges
        const speakers = result.data.allSpeakersYaml.edges
        posts.forEach(({ node: post }) => {
          createPage({
            path: `${post.fields.slug}`,
            component: mdTemplate,
            context: {
              post: post,
              slug: post.fields.slug,
            },
          })
        })
        speakers.forEach(({ node: speaker }) => {
          createPage({
            path: `speaker/${speaker.uuid}`,
            component: speakerTemplate,
            context: {
              speaker: speaker,
            },
          })
        })
      }),
    )
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

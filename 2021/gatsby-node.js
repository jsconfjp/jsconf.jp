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
              }
            }
          }
          allTalksYaml {
            edges {
              node {
                uuid
                title
                titleJa
                description
                descriptionJa
                spokenLanguage
                slideLanguage
                speakerIDs
                date
                startsAt
                endsAt
                room
              }
            }
          }
          allFile(filter: { relativePath: { regex: "/speakers/" } }) {
            nodes {
              name
              childImageSharp {
                gatsbyImageData(
                  width: 262
                  height: 262
                  placeholder: BLURRED
                  layout: CONSTRAINED
                )
              }
            }
          }
        }
      `).then(result => {
        if (result.errors) {
          reject(result.errors)
        }

        const posts = result.data.allMarkdownRemark.edges
        posts.forEach(({ node: post }) => {
          createPage({
            path: `${post.fields.slug}`,
            component: mdTemplate,
            context: {
              post: post,
              slug: post.fields.slug
            }
          })
        })

        const speakers = result.data.allSpeakersYaml.edges.map(
          ({ node }) => node
        )
        const speakerMap = speakers.reduce(
          (acc, speaker) => ({ ...acc, [speaker.uuid]: speaker }),
          {}
        )
        const avatars = result.data.allFile.nodes
          .filter(avatar => avatar.childImageSharp)
          .map(avatar => ({
            uuid: avatar.name,
            ...avatar.childImageSharp.gatsbyImageData
          }))
        const avatarMap = avatars.reduce(
          (acc, avatar) => ({
            ...acc,
            [avatar.uuid]: avatar
          }),
          {}
        )
        const talks = result.data.allTalksYaml.edges.map(({ node }) => node)
        talks.forEach(talk => {
          const talkSpeakers = talk.speakerIDs.map(speakerID => {
            const speaker = speakerMap[speakerID]
            if (!speaker) {
              throw new Error(
                `Speaker not found: speakerID=${speakerID}, talk=${talk.uuid}`
              )
            }
            return speaker
          })
          const speakerAvatars = talkSpeakers.map(speaker => {
            const avatar = avatarMap[speaker.uuid]
            if (!avatar) {
              throw new Error(
                `Avatar not found: speakerID=${speaker.uuid}, talk=${talk.uuid}`
              )
            }
            return avatar
          })

          createPage({
            path: `talk/${talk.uuid}`,
            component: speakerTemplate,
            context: {
              speakers: talkSpeakers,
              avatars: speakerAvatars,
              talk
            }
          })
        })
      })
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
      value
    })
  }
}

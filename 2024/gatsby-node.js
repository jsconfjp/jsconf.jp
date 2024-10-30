/* eslint-env node */

const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const schedulePages = [undefined, "A", "B", "C", "D"]

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const mdTemplate = path.resolve(`./src/templates/markdown.tsx`)
    const speakerTemplate = path.resolve(`./src/templates/speaker.tsx`)
    const scheduleTemplate = path.resolve(`./src/templates/schedule.tsx`)
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
                nameReading
                biography
                biographyJa
                github
                mastodon
                homepage
                twitter
                pronoun
                location
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
                slidesUrl
                speakerIDs
                sponsorIDs
                date
                startsAt
                endsAt
                track
                youtube
              }
            }
          }
          allSponsorsYaml {
            edges {
              node {
                uuid
                name
                grade
                url
                logoUrl
                prText
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
        const postBySlug = {}
        posts.forEach(({ node: post }) => {
          let [_, slug, lang] = /^(.*?)(?:-(en|ja)\/)?$/g.exec(post.fields.slug)
          if (lang) {
            slug += "/"
          }
          let langPost = postBySlug[slug]
          if (!langPost) {
            langPost = {}
            postBySlug[slug] = langPost
          }
          langPost[lang ?? ""] = post
        })
        for (const [slug, { en, ja, "": unknown }] of Object.entries(
          postBySlug,
        )) {
          createPage({
            path: slug,
            component: mdTemplate,
            context: {
              post: { en, ja, unknown },
              slug,
            },
          })
        }

        const speakers = result.data.allSpeakersYaml.edges.map(
          ({ node }) => node,
        )
        const speakerMap = speakers.reduce(
          (acc, speaker) => ({ ...acc, [speaker.uuid]: speaker }),
          {},
        )
        const sponsors = result.data.allSponsorsYaml.edges.map(
          ({ node }) => node,
        )
        const sponsorMap = sponsors.reduce(
          (acc, sponsor) => ({ ...acc, [sponsor.uuid]: sponsor }),
          {},
        )
        const avatars = result.data.allFile.nodes
          .filter(avatar => avatar.childImageSharp)
          .map(avatar => ({
            uuid: avatar.name,
            ...avatar.childImageSharp.gatsbyImageData,
          }))
        const avatarMap = avatars.reduce(
          (acc, avatar) => ({
            ...acc,
            [avatar.uuid]: avatar,
          }),
          {},
        )
        const talks = result.data.allTalksYaml.edges
          .map(({ node }) => node)
          .filter(
            node => node.speakerIDs?.length > 0 || node.sponsorIDs?.length > 0,
          )
        talks.forEach(talk => {
          const talkSpeakers =
            talk.speakerIDs?.map(speakerID => {
              const speaker = speakerMap[speakerID]
              if (!speaker) {
                throw new Error(
                  `Speaker not found: speakerID=${speakerID}, talk=${talk.uuid}`,
                )
              }
              return speaker
            }) ?? []
          const talkSponsors =
            talk.sponsorIDs?.map(sponsorID => {
              const sponsor = sponsorMap[sponsorID]
              if (!sponsor) {
                throw new Error(
                  `sponsor not found: sponsorID=${sponsorID}, talk=${talk.uuid}`,
                )
              }
              return sponsor
            }) ?? []
          const speakerAvatars = talkSpeakers.map(speaker => {
            const avatar = avatarMap[speaker.uuid]
            if (!avatar) {
              throw new Error(
                `Avatar not found: speakerID=${speaker.uuid}, talk=${talk.uuid}`,
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
              sponsors: talkSponsors,
              talk,
            },
          })
        })
        schedulePages.forEach(track => {
          createPage({
            path: track ? `schedule/${track}` : "schedule",
            component: scheduleTemplate,
            context: {
              selectedTrack: track,
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

import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { useTranslation } from "react-i18next"

import { Layout } from "../components/Layout"
import { SEO } from "../components/Seo"
import { Hero } from "../components/Hero"
import { SubTitle } from "../components/SubTitle"
import { SpeakerList } from "../components/SpeakerList"
import { SponsorList } from "../components/SponsorList"
import { LinkButton } from "../components/LinkButton"
import { Card as _Card } from "../components/Card"
import { Centerize as _Centerize } from "../components/Centerize"
import { Member } from "../components/Member"
import { times } from "../util/misc"
import bg from "../images/bg.png"
import bgFlipX from "../images/bg-flip-x.png"

const WavyBox = styled.div`
  margin: 0;
  background-image: url("${bg}");
  background-repeat: no-repeat;
  background-position: top -830px right -300px;
  background-size: 100%;
  background-image: url("${bg}"), url("${bgFlipX}");
  background-repeat: no-repeat, no-repeat;
  background-position: top -830px right -300px, center left -450px;
  background-size: 100%, 120%;
`
const Container = styled.div`
  padding: 0 1em;
`
const Centerize = styled(_Centerize)`
  & + & {
    margin-top: 80px;
  }
`
const Card = styled(_Card)`
  max-width: 1080px;
  margin: 80px auto;
  padding: 70px;

  ${({ theme }) => theme.breakpoints.mobile} {
    margin: 80px 0;
    padding: 1em;
  }
`
const OrganizersBox = styled.div`
  display: grid;
  margin-bottom: 1em;
  grid-column-gap: 60px;
  grid-row-gap: 60px;
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.text};
  font-size: 1.6rem;
  overflow-wrap: break-word;

  ${({ theme }) => theme.breakpoints.largerThanMobile} {
    grid-template-columns: repeat(3, minmax(1em, 200px));
  }

  ${({ theme }) => theme.breakpoints.mobile} {
    grid-template-columns: repeat(3, minmax(1em, max-content));
    grid-column-gap: 20px;
    grid-row-gap: 20px;
  }
`
const MembersBox = styled(OrganizersBox)`
  grid-template-columns: repeat(6, minmax(1em, max-content));

  ${({ theme }) => theme.breakpoints.mobile} {
    grid-template-columns: repeat(4, minmax(1em, max-content));
  }
`
const SchedulesBox = styled.div`
  display: flex;
  justify-content: center;
  width: calc(100% - 3em);
  max-width: 910px;

  ${({ theme }) => theme.breakpoints.mobile} {
    flex-direction: column;
  }
`
const SponsorBox = styled.div`
  margin-top: 80px;
  padding: 100px 0;
  background-color: ${({ theme }) => theme.colors.baseDimmed};
`

export default function IndexPage() {
  const { t, i18n } = useTranslation()
  const {
    site,
    allSpeakersYaml,
    allSponsorsYaml,
    allMembersYaml,
    allFile,
    allTalksYaml
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          ticketUrl
          sponsorFormUrl
          cfpFormUrl
        }
      }
      allSponsorsYaml {
        edges {
          node {
            name
            grade
            url
            logoUrl
            prText
          }
        }
      }
      allSpeakersYaml(filter: { featured: { eq: true } }) {
        edges {
          node {
            uuid
            name
            biography
            biographyJa
            presentations
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
          }
        }
      }
      allMembersYaml {
        edges {
          node {
            name
            url
            avatar
            isJNA
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
  `)
  const guestSpeakers = allSpeakersYaml.edges.map(({ node }: any) => node)
  const sponsors = allSponsorsYaml.edges.map(({ node }: any) => node)
  const talks = allTalksYaml.edges.map(({ node }: any) => node)
  const avatars = allFile.nodes
    .filter((avatar: any) => avatar.childImageSharp)
    .map((avatar: any) => ({
      uuid: avatar.name,
      ...avatar.childImageSharp.gatsbyImageData
    }))
  const jnaMembers = allMembersYaml.edges.filter(({ node }: any) => node.isJNA)
  const notJnaMembers = allMembersYaml.edges.filter(
    ({ node }: any) => !node.isJNA
  )
  const dateTimeFormatter = new Intl.DateTimeFormat(i18n.language, {
    // @ts-ignore dateStyle' does not exist in type 'DateTimeFormatOptions'
    dateStyle: "medium"
  })

  return (
    <Layout>
      <WavyBox>
        <SEO lang={i18n.language as Languages} />
        <Container>
          <Centerize>
            <Hero
              title={t("siteName")}
              subTitle={t("festivalPeriod")}
              description={t("description")}
            />
          </Centerize>

          <Card>
            <SubTitle>{t("guestSpeakers")}</SubTitle>
            <SpeakerList
              speakers={guestSpeakers}
              avatars={avatars}
              talks={talks}
            />
            {guestSpeakers.length > 0 ? (
              <Centerize>
                <LinkButton color="primary" to="/speakers/">
                  {t("goToGuests")}
                </LinkButton>
              </Centerize>
            ) : (
              <Centerize>
                <LinkButton size="large" disabled to={""}>
                  {t("comingSoon")}
                </LinkButton>
              </Centerize>
            )}
          </Card>

          <Centerize>
            <SubTitle>{t("schedule")}</SubTitle>
            <SchedulesBox>
              <LinkButton color="secondary" size="large" to="/schedule">
                {t("day1")} ({dateTimeFormatter.format(times.day1.startsAt)})
              </LinkButton>
            </SchedulesBox>
          </Centerize>

          <Card>
            <SubTitle>{t("tickets")}</SubTitle>
            <Centerize>
              {site.siteMetadata.ticketUrl ? (
                <LinkButton
                  color="primary"
                  size="large"
                  to={site.siteMetadata.ticketUrl}
                >
                  {t("buyTickets")}
                </LinkButton>
              ) : (
                <LinkButton size="large" disabled to={""}>
                  {t("comingSoon")}
                </LinkButton>
              )}
            </Centerize>
          </Card>

          {/* <Centerize>
            <SubTitle>{t("callForSpeakers")}</SubTitle>
            <Centerize>
              {site.siteMetadata.cfpFormUrl ? (
                <LinkButton
                  color="primary"
                  size="large"
                  to={site.siteMetadata.cfpFormUrl}
                >
                  {t("submitTalk")}
                </LinkButton>
              ) : (
                <LinkButton size="large" disabled to={""}>
                  {t("comingSoon")}
                </LinkButton>
              )}
            </Centerize>
          </Centerize> */}

          <Centerize>
            <SubTitle>{t("callForSponsors")}</SubTitle>
            <Centerize>
              {site.siteMetadata.sponsorFormUrl ? (
                <LinkButton
                  color="primary"
                  size="large"
                  to={site.siteMetadata.sponsorFormUrl}
                >
                  {t("becomeASponsor")}
                </LinkButton>
              ) : (
                <LinkButton size="large" disabled to={""}>
                  {t("comingSoon")}
                </LinkButton>
              )}
            </Centerize>
          </Centerize>

          <Centerize>
            {jnaMembers.length > 0 ? (
              <>
                <SubTitle>{t("organizingTeam")}</SubTitle>
                <OrganizersBox>
                  {jnaMembers.map(
                    ({ node: member }: { node: any }, i: number) => (
                      <Member key={i} {...member} />
                    )
                  )}
                </OrganizersBox>
              </>
            ) : null}
            {notJnaMembers.length > 0 ? (
              <>
                <SubTitle>{t("volunteerTeam")}</SubTitle>
                <MembersBox>
                  {notJnaMembers.map(
                    ({ node: member }: { node: any }, i: number) => (
                      <Member key={i} {...member} />
                    )
                  )}
                </MembersBox>
              </>
            ) : null}
            <Centerize>
              <LinkButton color="secondary" to="https://nodejs.jp/">
                {t("joinUs")}
              </LinkButton>
            </Centerize>
          </Centerize>
        </Container>

        <SponsorBox>
          <Centerize>
            <SponsorList sponsors={sponsors} showPrText={false} />
          </Centerize>
        </SponsorBox>
      </WavyBox>
    </Layout>
  )
}

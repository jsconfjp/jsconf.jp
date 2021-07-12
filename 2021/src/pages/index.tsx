import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { useTranslation } from "react-i18next"

import { Layout } from "../components/Layout"
import { SEO } from "../components/Seo"
import { Hero } from "../components/Hero"
import { Map } from "../components/Map"
import { Address } from "../components/Address"
import { SubTitle } from "../components/SubTitle"
import { SpeakerList } from "../components/SpeakerList"
import { SponsorList } from "../components/SponsorList"
import { LinkButton } from "../components/LinkButton"
import { Card as _Card } from "../components/Card"
import { Centerize } from "../components/Centerize"
import { times } from "../util/misc"
import bg from "../images/bg.png"
import bgFlipX from "../images/bg-flip-x.png"

const WavyBox = styled.div`
  margin: 0;
  background-image: url("${bg}"), url("${bgFlipX}");
  background-repeat: no-repeat, no-repeat;
  background-position: top -830px right -300px, center left -450px;
  background-size: 100%, 120%;
`
const Container = styled.div`
  padding: 0 1em;
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
const VenueBox = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.innerWidth};
  margin: 0 auto;
`
const OrganizersBox = styled.div`
  display: grid;
  margin-bottom: 1em;
  grid-template-columns: repeat(auto-fit, minmax(1em, max-content));
  grid-column-gap: 60px;
  grid-row-gap: 60px;
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.text};
  font-size: 1.6rem;
  overflow-wrap: break-word;

  ${({ theme }) => theme.breakpoints.mobile} {
    grid-template-columns: repeat(3, minmax(1em, max-content));
    grid-column-gap: 20px;
    grid-row-gap: 20px;
  }
`
const MembersBox = styled(OrganizersBox)`
  grid-template-columns: repeat(6, minmax(1em, max-content));
`
const SchedulesBox = styled.div`
  display: flex;
  justify-content: space-between;
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
    allSpeakersYaml,
    allSponsorsYaml,
    allMembersYaml,
    allFile,
    allTalksYaml
  } = useStaticQuery(graphql`
    query {
      allSponsorsYaml {
        edges {
          node {
            name
            grade
            url
            logoUrl
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
        <SEO title={t("siteName")} description={t("description")} />
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
            <Centerize>
              <LinkButton color="primary" to="/speakers/">
                {t("goToGuests")}
              </LinkButton>
            </Centerize>
          </Card>

          <Centerize>
            <SubTitle>{t("schedule")}</SubTitle>
            <SchedulesBox>
              <LinkButton color="secondary" size="large" to="/schedule/#day1">
                {t("day1")} ({dateTimeFormatter.format(times.day1.startsAt)})
              </LinkButton>
              <LinkButton color="secondary" size="large" to="/schedule/#day2">
                {t("day2")} ({dateTimeFormatter.format(times.day2.startsAt)})
              </LinkButton>
            </SchedulesBox>
          </Centerize>

          <Card>
            <Centerize>
              <SubTitle>{t("tickets")}</SubTitle>
              <Centerize>
                <LinkButton
                  color="primary"
                  size="large"
                  to="https://pretix.eu/jsconfjp/2019/"
                >
                  {t("buyTickets")}
                </LinkButton>
              </Centerize>
            </Centerize>
          </Card>

          <Centerize>
            <SubTitle>{t("callForSponsors")}</SubTitle>
            <Centerize>
              <LinkButton
                color="primary"
                size="large"
                to="https://docs.google.com/forms/d/e/1FAIpQLSd6373GnVMxTaT7QhKoPk60D8C70QZTCZugKlCuXWcQBq0v4A/viewform"
              >
                {t("becomeASponsor")}
              </LinkButton>
            </Centerize>
          </Centerize>

          <Card>
            <VenueBox>
              <SubTitle>{t("venue")}</SubTitle>
              <Map width={940} height={500} title={t("venue")} />
              <Address summary />
              <Centerize>
                <LinkButton color="primary" to="/venue/">
                  {t("moreDetails")}
                </LinkButton>
              </Centerize>
            </VenueBox>
          </Card>

          <Centerize>
            <SubTitle>{t("organizingTeam")}</SubTitle>
            <OrganizersBox>
              {jnaMembers.map(({ node: member }: { node: any }) => (
                <div>
                  <a href={member.url} target="_blank" rel="noopener">
                    {/*
                    // @ts-ignore Property 'loading' does not exist */}
                    <img width="100%" loading="lazy" src={member.avatar} />
                    <span>{member.name}</span>
                  </a>
                </div>
              ))}
            </OrganizersBox>
            <SubTitle>{t("volunteerTeam")}</SubTitle>
            <MembersBox>
              {notJnaMembers.map(({ node: member }: { node: any }) => (
                <div>
                  <a href={member.url} target="_blank" rel="noopener">
                    {/*
                    // @ts-ignore Property 'loading' does not exist */}
                    <img width="100%" loading="lazy" src={member.avatar} />
                    <span>{member.name}</span>
                  </a>
                </div>
              ))}
            </MembersBox>
            <Centerize>
              <LinkButton color="secondary" to="https://nodejs.jp/">
                {t("joinUs")}
              </LinkButton>
            </Centerize>
          </Centerize>
        </Container>

        <SponsorBox>
          <Centerize>
            <Container>
              <SubTitle>{t("sponsors")}</SubTitle>
              <SponsorList sponsors={sponsors} />
            </Container>
          </Centerize>
        </SponsorBox>
      </WavyBox>
    </Layout>
  )
}

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
// const SchedulesBox = styled.div`
//   display: flex;
//   justify-content: space-between;
//   width: calc(100% - 3em);
//   max-width: 910px;

//   ${({ theme }) => theme.breakpoints.mobile} {
//     flex-direction: column;
//   }
// `
const SponsorBox = styled.div`
  margin-top: 80px;
  padding: 100px 0;
  background-color: ${({ theme }) => theme.colors.baseDimmed};
`

export default function IndexPage() {
  const { t } = useTranslation()
  const { allSpeakersYaml, allSponsorsYaml } = useStaticQuery(graphql`
    query {
      allSpeakersYaml(filter: { featured: { eq: true } }) {
        edges {
          node {
            featured
            name
            twitter
            photoURL
            talkTitle
          }
        }
      }
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
    }
  `)
  const guestSpeakers = allSpeakersYaml.edges.map(({ node }: any) => node)
  const sponsors = allSponsorsYaml.edges.map(({ node }: any) => node)

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
            <SpeakerList speakers={guestSpeakers} />
            <Centerize>
              <LinkButton color="primary" to="/speakers/">
                {t("goToGuests")}
              </LinkButton>
            </Centerize>
          </Card>

          {/* <Centerize>
            <SubTitle>{t("schedule")}</SubTitle>
            <SchedulesBox>
              <LinkButton color="secondary" size="large" to="/schedule/#day1">
                {t("day1")}
              </LinkButton>
              <LinkButton color="secondary" size="large" to="/schedule/#day2">
                {t("day2")}
              </LinkButton>
            </SchedulesBox>
          </Centerize> */}

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
              <Map width={940} height={500} />
              <Address summary />
              <Centerize>
                <LinkButton color="primary" to="/venue/">
                  {t("moreDetails")}
                </LinkButton>
              </Centerize>
            </VenueBox>
          </Card>
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

import React from "react"
import { useTranslation } from "react-i18next"

import styled from "styled-components"
import { Centerize } from "../components/Centerize"
import { Layout } from "../components/Layout"
import { LinkButton } from "../components/LinkButton"
import { Logo } from "../components/Logo"
import { ResponsiveBox } from "../components/ResponsiveBox"
import { SEO } from "../components/Seo"

export const Head = () => {
  const { t } = useTranslation()
  return <SEO title={t("pageNotFound")} description={t("pageNotFound")} />
}

const Box = styled.div`
  display: flex;
  margin-top: 120px;
  margin-bottom: 20px;
  width: 100%;
  max-width: 910px;
  align-items: center;

  min-height: calc(50vh);

  ${({ theme }) => theme.breakpoints.mobile} {
    margin-top: 60px;
    flex-direction: column;
    width: 100%;
  }
`
const TextBox = styled.div`
  flex: 1;
  margin-left: 60px;

  ${({ theme }) => theme.breakpoints.mobile} {
    margin: 0;
  }
`

const Title = styled.h1`
  margin: 0;
  font-family: ${({ theme }) => theme.fonts.header};
  font-size: ${({ theme }) => theme.fontSizes.hero};
  ${({ theme }) => theme.breakpoints.mobile} {
    margin-top: 20px;
    margin-bottom: 10px;
    line-height: 1;
  }
`

const SubTitle = styled.h2`
  margin: 0;
  font-family: ${({ theme }) => theme.fonts.header};
  font-size: ${({ theme }) => theme.fontSizes.subTitle};
  margin-bottom: 20px;
`

export default function Page404() {
  const { t } = useTranslation()

  return (
    <Layout>
      <ResponsiveBox>
      <Centerize>
        <Box>
          <Logo size={270} />
          <TextBox>
            <Title lang="en">{t("pageNotFound.title")}</Title>
            <SubTitle lang="en">{t("pageNotFound.description")}</SubTitle>

            <LinkButton color="primary" size="normal" to={"/"}>
              {t("pageNotFound.cta")}
            </LinkButton>
          </TextBox>
        </Box>
      </Centerize>
      </ResponsiveBox>
    </Layout>
  )
}

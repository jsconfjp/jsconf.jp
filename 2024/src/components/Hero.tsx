import React from "react"
import styled from "styled-components"
import { Logo2023 } from "./Logo2023"

type Props = {
  title: string
  subTitle: string
  description: string
}

const Box = styled.div`
  display: flex;
  margin-top: 120px;
  margin-bottom: 20px;
  width: 100%;
  max-width: 910px;
  align-items: center;

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
`
const SubTitle = styled.h2`
  margin: 0;
  font-family: ${({ theme }) => theme.fonts.header};
  font-size: ${({ theme }) => theme.fontSizes.subTitle};
`
const Paragraph = styled.p`
  margin: 28px 0 0;
  font-family: ${({ theme }) => theme.fonts.text};
  font-size: 2rem;
`

export function Hero(props: Props) {
  const { title, subTitle, description } = props

  return (
    <Box>
      <Logo2023 size={270} />
      <TextBox>
        <Title lang="en">{title}</Title>
        <SubTitle>{subTitle}</SubTitle>
        <Paragraph lang="en">{description}</Paragraph>
      </TextBox>
    </Box>
  )
}

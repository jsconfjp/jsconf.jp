import React from "react"
import styled from "styled-components"
import { Logo } from "./Logo"

type Props = {
  title: string
  subTitle: string
  description: string
}

const Box = styled.div`
  display: flex;
  margin-top: 120px;
  margin-bottom: 20px;
  width: 910px;
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
  font-size: 60px;
`
const SubTitle = styled.h2`
  margin: 0;
  font-family: ${({ theme }) => theme.fonts.header};
  font-size: 24px;
`
const Paragraph = styled.p`
  margin: 28px 0 0;
  font-family: ${({ theme }) => theme.fonts.text};
  font-size: 20px;
`

export function Hero(props: Props) {
  const { title, subTitle, description } = props

  return (
    <Box>
      <Logo size={270} />
      <TextBox>
        <Title>{title}</Title>
        <SubTitle>{subTitle}</SubTitle>
        <Paragraph>{description}</Paragraph>
      </TextBox>
    </Box>
  )
}

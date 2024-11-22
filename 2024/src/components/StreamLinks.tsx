import React from "react"
import { useTranslation } from "react-i18next"

import styled from "styled-components"

const Container = styled.div`
  width: 100%;

  display: flex;
  flex-wrap: wrap;
  gap: 40px 20px;
  justify-content: center;
`

const Button = styled.a`
  display: block;
  height: min-content;

  color: #000000;
  font-weight: bold;
  font-family: ${({ theme }) => theme.fonts.text};
  padding: 20px 30px 20px 30px;
  text-decoration: none;
  border: solid 2px;

  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
`

const ButtonA = styled(Button)`
  background-color: ${({ theme }) => theme.colors.roomA};
  border-color: ${({ theme }) => theme.colors.roomABorder};
`
const ButtonB = styled(Button)`
  background-color: ${({ theme }) => theme.colors.roomB};
  border-color: ${({ theme }) => theme.colors.roomBBorder};
`

const ButtonC = styled(Button)`
  background-color: ${({ theme }) => theme.colors.roomC};
  border-color: ${({ theme }) => theme.colors.roomCBorder};
`

const ButtonD = styled(Button)`
  background-color: ${({ theme }) => theme.colors.roomD};
  border-color: ${({ theme }) => theme.colors.roomDBorder};
`

export const StreamLinks = () => {
  const { t } = useTranslation()

  return (
    <Container>
      <ButtonA href="https://youtube.com/live/ew1zmA7y9q8" target="_blank">
        {t("streamLinks.trackA")}
      </ButtonA>
      <ButtonB href="https://youtube.com/live/2BXwigWGjWQ" target="_blank">
        {t("streamLinks.trackB")}
      </ButtonB>
      <ButtonC href="https://youtube.com/live/E3yTtaGr7V8" target="_blank">
        {t("streamLinks.trackC")}
      </ButtonC>
      <ButtonD href="https://youtube.com/live/5Wt0r5vHOwQ" target="_blank">
        {t("streamLinks.trackD")}
      </ButtonD>
    </Container>
  )
}


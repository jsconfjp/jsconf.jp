import React from "react"
import styled from "styled-components"
import { useTranslation } from "react-i18next"
import { Link } from "gatsby"

export type Props = {
  path: string[]
}

const Box = styled.div`
  display: flex;
`
const Text = styled.span`
  margin-right: 0.5em;
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.fonts.header};
  text-transform: uppercase;
`

export function Breadcrumb(props: Props) {
  const { path } = props
  const { t } = useTranslation()

  return (
    <Box>
      <Link to="/">
        <Text>{t("top")}</Text>
      </Link>
      {path.map(label => (
        <>
          <Text>></Text>
          <Text key={label}>{label}</Text>
        </>
      ))}
    </Box>
  )
}

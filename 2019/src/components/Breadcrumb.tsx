import React from "react"
import styled from "styled-components"
import { useTranslation } from "react-i18next"
import { Link } from "gatsby"

export type Props = {
  path: (string | { label: string; to: string })[]
}

const Box = styled.div`
  display: flex;
`
const Text = styled.span`
  margin-right: 0.5em;
  font-size: 1.4rem;
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
      {path.filter(Boolean).map(label => {
        const path = typeof label === "string" ? { label, to: null } : label
        return (
          <React.Fragment key={path.label}>
            <Text>></Text>
            {path.to ? (
              <Link to={path.to}>
                <Text>{path.label}</Text>
              </Link>
            ) : (
              <Text>{path.label}</Text>
            )}
          </React.Fragment>
        )
      })}
    </Box>
  )
}

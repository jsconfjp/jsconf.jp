import React from "react"
import styled from "styled-components"
import { useTranslation } from "react-i18next"
import { Link } from "gatsby"

export type Props = {
  path: (string | null | { label: string; to: string })[]
}

const Box = styled.div`
  display: flex;
  font-size: 1.4rem;

  @media print {
    display: none;
  }
`
const Text = styled.span`
  margin-right: 0.5em;
  font-weight: bold;
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.fonts.header};
  text-transform: uppercase;

  @media print {
    color: ${({ theme }) => theme.colors.disabledText};
  }
`

export function Breadcrumb(props: Props) {
  const { path } = props
  const { t } = useTranslation()

  return (
    <Box>
      <Link to="/">
        <Text>{t("top")}</Text>
      </Link>
      {path
        .filter(
          (label): label is string | { label: string; to: string } => !!label,
        )
        .map(label => {
          const path = typeof label === "string" ? { label, to: null } : label
          return (
            <React.Fragment key={path.label}>
              <Text>&gt;</Text>
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

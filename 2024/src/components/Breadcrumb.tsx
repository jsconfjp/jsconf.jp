import React from "react"
import styled from "styled-components"
import { useTranslation } from "react-i18next"
import { Link as _Link } from "gatsby"

export type Props = {
  path: (string | null | { label: string; to: string })[]
}

const Link = styled(_Link)`
  text-decoration: none;
`

const Box = styled.div`
  display: flex;
`
const Text = styled.span`
  color: ${({ theme }) => theme.colors.textGrey};
  margin-right: 0.5em;
  font-size: 1.4rem;
  font-weight: bold;
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.fonts.header};
  text-transform: uppercase;

  ${Link} & {
    &:hover {
      color: ${({ theme }) => theme.colors.text};
    }
  }

  @media print {
    display: none;
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

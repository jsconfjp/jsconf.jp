import { Link } from "gatsby"
import styled from "styled-components"

export const InlineLink = styled(Link)`
  text-decoration: none;
  font-family: ${({ theme }) => theme.fonts.text};
  color: inherit;
  text-align: left;
`

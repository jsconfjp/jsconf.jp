import styled from "styled-components"

export const Card = styled.div`
  box-shadow: 0px 3px 10px ${({ theme }) => theme.colors.shadow};
  background-color: ${({ theme }) => theme.colors.base};
`

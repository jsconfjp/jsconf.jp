import styled from "styled-components"

export const Centerize = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: 100%;
  max-width: ${({ theme }) => theme.width};
`

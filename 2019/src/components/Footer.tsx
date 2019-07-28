import React from "react"
import styled from "styled-components"

const Box = styled.footer`
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.border};
`
const LinksBox = styled.div`
  display: flex;

  ${({ theme }) => theme.breakpoints.mobile} {
    flex-direction: column;
  }
`
const Link = styled.a`
  ::after {
    margin: 0px 8px;
    content: "|";
  }
  :last-child::after {
    content: "";
  }

  ${({ theme }) => theme.breakpoints.mobile} {
    ::after {
      content: "";
    }
  }
`

export function Footer(_props: Props) {
  return (
    <Box>
      <LinksBox>
        <Link href="https://nodejs.org/" target="_blank">
          Node.js
        </Link>
        <Link href="https://nodefest.jp/2018/" target="_blank">
          Nodefest 2018
        </Link>
        <Link href="https://nodejs.jp/" target="_blank">
          Japan Node.js Association
        </Link>
        <Link href="/coc" target="_blank">
          Code of Conduct
        </Link>
      </LinksBox>
      <small>&copy; 2019-{new Date().getFullYear()} JSConf JP</small>
    </Box>
  )
}

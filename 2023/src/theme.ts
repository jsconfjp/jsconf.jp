import { DefaultTheme } from "styled-components"

// https://www.styled-components.com/docs/advanced#theming
export const theme: DefaultTheme = {
  width: "1200px",
  innerWidth: "940px",
  colors: {
    base: "#ffffff",
    baseDimmed: "#F5F5F5",
    text: "#000000",
    shadow: "rgba(0, 0, 0, 0.16)",
    primary: "#EA5106",
    secondary: "#36A49C",
    disabled: "#DBDBDB",
    disabledText: "#7E7E7E",
    border: "#DBDBDB",
    talkBg: "#FFE9DE",
    roomA: "#FFE9DE",
    roomABorder: "#FF5700",
    roomB: "#D3EEEC",
    roomBBorder: "#36A49C",
    roomC: "#FFFAD2",
    roomCBorder: "#F9D749",
    roomD: "#ddf1ff",
    roomDBorder: "#509edd",
    accessibility: "#D3EEEC",
  },
  fonts: {
    header: "Lato",
    text: [
      "Frutiger",
      "Frutiger Linotype",
      "Univers",
      "Calibri",
      "Gill Sans",
      "Gill Sans MT",
      "Myriad Pro",
      "Myriad",
      "DejaVu Sans Condensed",
      "Liberation Sans",
      "Nimbus Sans L",
      "Tahoma",
      "Geneva",
      "Helvetica Neue",
      "Helvetica",
      "Arial",
      "Hiragino Sans",
      "sans-serif",
    ]
      .map(n => `"${n}"`)
      .join(", "),
  },
  fontSizes: {
    hero: "6rem",
    title: "4rem",
    subTitle: "2.6rem",
  },
  breakpoints: {
    mobile: "@media (max-width: 860px)",
    largerThanMobile: "@media (min-width: 861px)",
  },
}

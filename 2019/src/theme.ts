import { DefaultTheme } from "styled-components"

// https://www.styled-components.com/docs/advanced#theming
export const theme: DefaultTheme = {
  width: "1200px",
  colors: {
    base: "#ffffff",
    baseDimmed: "#F5F5F5",
    text: "#000000",
    shadow: "rgba(0, 0, 0, 0.16)",
    primary: "#FF5700",
    secondary: "#3BB3AA",
    disabled: "#DBDBDB",
    disabledText: "#7E7E7E",
    border: "#DBDBDB",
  },
  fonts: {
    header: "Lato",
    text: "Arial",
  },
  breakpoints: {
    mobile: "@media (max-width: 576px)",
  },
}

// import original module declarations
import "styled-components"

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    width: string
    innerWidth: string
    colors: {
      base: string
      baseDimmed: string
      text: string
      shadow: string
      primary: string
      secondary: string
      disabled: string
      disabledText: string
      border: string
      roomA: string
      roomABorder: string
      roomB: string
      roomBBorder: string
    }
    fonts: {
      header: string
      text: string
    }
    breakpoints: {
      mobile: string
      largerThanMobile: string
    }
  }
}

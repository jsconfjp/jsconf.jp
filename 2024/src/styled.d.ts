import "styled-components"

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    width: string
    innerWidth: string
    colors: {
      base: string
      baseDimmed: string
      bgLight: string
      bgMiddle: string
      bgDark: string
      text: string
      shadow: string
      primary: string
      primaryText: string
      secondary: string
      secondaryText: string
      disabled: string
      disabledText: string
      border: string
      talkBg: string
      roomA: string
      roomABorder: string
      roomB: string
      roomBBorder: string
      roomC: string
      roomCBorder: string
      roomD: string
      roomDBorder: string
      accessibility: string
    }
    fonts: {
      header: string
      text: string
    }
    fontSizes: {
      hero: string
      title: string
      subTitle: string
    }
    breakpoints: {
      mobileSm: string
      mobile: string
      largerThanMobile: string
    }
  }
}

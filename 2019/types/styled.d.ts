// import original module declarations
import "styled-components"

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    width: string
    colors: {
      base: string
      text: string
      shadow: string
      primary: string
      secondary: string
      disabled: string
      disabledText: string
      border: string
    }
    breakpoints: {
      mobile: string
    }
  }
}

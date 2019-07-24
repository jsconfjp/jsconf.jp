// import original module declarations
import "styled-components"

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
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
  }
}

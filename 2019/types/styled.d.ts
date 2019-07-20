// import original module declarations
import "styled-components"

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      base: string
      shadow: string
      primary: string
      secondary: string
    }
  }
}

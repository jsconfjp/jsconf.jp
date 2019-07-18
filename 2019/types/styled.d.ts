// import original module declarations
import "styled-components"

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      base: string
      primary: string
      secondary: string
    }
  }
}

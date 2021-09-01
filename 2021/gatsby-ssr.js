import * as React from "react"
import i18n from "i18next"
import { I18nextProvider } from "react-i18next"
import { options } from "./src/i18n/index"

const wrapPageElement = ({ element }) => {
  i18n.init({
    ...options
  })
  return <I18nextProvider i18n={i18n}>{element}</I18nextProvider>
}

export { wrapPageElement }

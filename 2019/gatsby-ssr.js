import React from "react"
import { renderToString } from "react-dom/server"
import { getI18n } from "react-i18next"
import { store } from "./src/i18n"

export const replaceRenderer = ({ bodyComponent, replaceBodyHTMLString }) => {
  return store.then(() => {
    const i18n = getI18n()
    i18n.changeLanguage("en")
    replaceBodyHTMLString(renderToString(<>{bodyComponent}</>))
  })
}

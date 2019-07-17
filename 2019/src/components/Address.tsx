import React from "react"
import { useTranslation } from "react-i18next"

type Props = {}

export function Address(_props: Props) {
  const { t } = useTranslation()

  return (
    <>
      <h3>{t("venue.name")}</h3>
      <p>
        <small>{t("venue.address")}</small>
      </p>
      <p>
        <a target="_blank" href={t("venue.url")}>
          {t("venue.url")}
        </a>
      </p>
    </>
  )
}

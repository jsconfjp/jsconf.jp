import React, { useMemo } from "react"
import { useTranslation } from "react-i18next"

type Props = {
  k: string
}

export const I18N = ({ k }: Props) => {
  const { t } = useTranslation()
  const text = useMemo(() => t(k), [t, k])
  return <>{text}</>
}

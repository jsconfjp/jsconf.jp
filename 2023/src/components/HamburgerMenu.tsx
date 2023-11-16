import React from "react"
import { useTranslation } from "react-i18next"
import styled from "styled-components"

type Props = {
  open: boolean
  onTouchEnd: () => void
  onKeyDown: React.KeyboardEventHandler
}

const Path = styled.path.attrs(({ theme }) => ({
  fill: theme.colors.primary,
}))``

const Svg = styled.svg`
  cursor: pointer;
`

export function HamburgerMenu(props: Props) {
  const { t } = useTranslation()
  const { onTouchEnd, onKeyDown, open } = props

  return (
    <Svg
      aria-controls="drawerMenu"
      aria-expanded={open}
      tabIndex={0}
      role="button"
      width={32}
      height={32}
      viewBox="0,0,100,100"
      onClick={onTouchEnd}
      onKeyDown={onKeyDown}
    >
      <title>{open ? t("closeMobileMenu") : t("openMobileMenu")}</title>
      {open ? (
        <Path
          d={[
            `M0,10 L10,0 L100,90 L90,100 L0,10`,
            `M90,0 L100,10 L10,100 L0,90 L90,0`,
          ].join(" ")}
        />
      ) : (
        <Path
          d={[
            `M0,0 L100,0 L100,12 L0,12 L0,0`,
            `M0,44 L100,44 L100,56 L0,56 L0,0`,
            `M0,88 L100,88 L100,100 L0,100 L0,0`,
          ].join(" ")}
        />
      )}
    </Svg>
  )
}

"use client"; // FIXME: i18n works only on client side

import CoCJa from "../../../doc/code-of-conduct-ja.md";
import CoCEn from "../../../doc/code-of-conduct-en.md";
import { useI18n } from "../../i18n/client";

export default function Page() {
  const { language } = useI18n();
  return <div>{language === "ja" ? <CoCJa /> : <CoCEn />}</div>;
}

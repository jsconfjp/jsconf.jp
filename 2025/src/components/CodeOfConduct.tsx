import CoCJa from "@/doc/code-of-conduct-ja.md";
import CoCEn from "@/doc/code-of-conduct-en.md";
import { useLocale } from "next-intl";

export function CodeOfConduct() {
  const locale = useLocale();
  return locale === "ja" ? <CoCJa /> : <CoCEn />;
}

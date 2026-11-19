import messages from "../../messages/en.json";
import { LOCALES } from "../i18n/constants";

declare module "next-intl" {
  interface AppConfig {
    Locale: (typeof LOCALES)[number];
    Messages: typeof messages;
  }
}

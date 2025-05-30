// import the original type declarations
import "i18next";
// import all namespaces (for the default language, only)
import about from "../app/i18n/locales/en/about.json";

declare module "i18next" {
  // Extend CustomTypeOptions
  interface CustomTypeOptions {
    // custom resources type
    resources: {
      about: typeof about;
    };
  }
}

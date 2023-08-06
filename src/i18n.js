import { createI18n } from "vue-i18n";
import messages from "./locales";
const i18n = createI18n({
  seo: true,
  legacy: false,
  globalInjection: true,
  locale: "ES", // set locale
  fallbackLocale: "EN",
  messages: messages,
});

export default i18n
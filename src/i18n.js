import { createI18n } from "vue-i18n";
import messages from "./locales";
const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: "ES", // set locale
  fallbackLocale: "EN",
  messages: messages,
});

export default i18n
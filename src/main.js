import { createApp } from "vue";
import App from "./App.vue";
import { createI18n, useI18n } from "vue-i18n";
import messages from "./locales";
import "./index.css";
const i18n = createI18n({
  legacy: false,
  locale: "en", // set locale
  fallbackLocale: "es",
  messages,
});

const app = createApp(App, i18n, {
  setup() {
    const { t } = useI18n(); // call `useI18n`, and spread `t` from  `useI18n` returning
    return { t }; // return render context that included `t`
  },
});
app.mount("#app");

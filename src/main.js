import { createApp } from "vue";
import App from "./App.vue";
import i18n from "./i18n";
import "./index.css";


const app = createApp(App).use(i18n);
app.mount("#app");

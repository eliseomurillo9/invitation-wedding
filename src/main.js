import { createApp } from "vue";
import router from './router/index.js'
import App from "./App.vue";
import i18n from "./i18n";
import "./index.css";
import "aos/dist/aos.css";

const app = createApp(App);
app.use(router)
app.use(i18n);
app.mount("#app");

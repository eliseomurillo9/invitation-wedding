import { createApp } from "vue";
import router from "./router/index.js";
import App from "./App.vue";
import i18n from "./i18n";
import { createMetaManager } from "vue-meta";
import "./index.css";
import "aos/dist/aos.css";
import VueSmoothScroll from 'vue3-smooth-scroll'
import Aos from "aos";

const app = createApp(App);
app.use(router);
app.use(i18n);
app.use(Aos.init());
app.use(VueSmoothScroll, {
    duration: 400,
    updateHistory: false
  });
app.use(createMetaManager);
app.mount("#app");

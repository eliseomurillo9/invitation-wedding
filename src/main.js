import { createApp } from "vue";
import router from "./router/index.js";
import App from "./App.vue";
import i18n from "./i18n";
import { createMetaManager } from "vue-meta";
import "./index.css";
import "aos/dist/aos.css";
import Aos from "aos";
import Vue3Toastify from "vue3-toastify";

const app = createApp(App);
app.use(Vue3Toastify, {
  autoClose: 3000,
});
app.use(router);
app.use(i18n);
app.use(Aos.init());
app.use(createMetaManager);
app.mount("#app");

// Import the functions you need from the SDKs you need

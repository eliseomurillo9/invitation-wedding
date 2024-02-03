import { createApp } from "vue";
import router from "./router/index.js";
import App from "./App.vue";
import i18n from "./i18n";
import { createMetaManager } from "vue-meta";
import "./index.css";
import "aos/dist/aos.css";
import Aos from "aos";

// Register the library as a Vue plugin

const app = createApp(App);
app.use(router);
app.use(i18n);
app.use(Aos.init());
app.use(createMetaManager);
app.mount("#app");

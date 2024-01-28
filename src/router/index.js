// import ConfirmationPage from "../views/ConfirmationPage.vue";
import LandingPage from "../views/LandingPage.vue";
import { createRouter, createWebHistory } from "vue-router";
import ConfirmationForm from "@/views/ConfirmationForm.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: LandingPage,
    meta: {
      title: "base.pageTitles.saveTheDate",
    },
  },
  {
    path: "/confirmation/:modality",
    name: "ConfirmationForm",
    component: ConfirmationForm,
  },
];

const router = createRouter({
  history: createWebHistory("/"),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} - G&E` || "Default Page Title";
  next();
});
export default router;

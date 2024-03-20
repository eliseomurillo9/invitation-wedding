// import ConfirmationPage from "../views/ConfirmationPage.vue";
import LandingPage from "../views/LandingPage.vue";
import { createRouter, createWebHistory } from "vue-router";
import ConfirmationForm from "@/views/ConfirmationForm.vue";
import ConfirmationPage from "@/views/ConfirmationPage.vue";
import GiftDetailsPage from "@/views/GiftDetailsPage.vue";
GiftDetailsPage


const routes = [
  {
    path: "/",
    name: "home",
    component: LandingPage,
    meta: {
      title: "Common.pageTitle.landing",
    },
  },
  {
    path: "/confirmation/:modality",
    name: "ConfirmationForm",
    component: ConfirmationForm,
  },
  {
    path: "/confirmated",
    name: "ConfirmationPAge",
    component: ConfirmationPage,
  },
  {
    path: "/giftDetails",
    name: "GiftDetailsPage",
    component: GiftDetailsPage,
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

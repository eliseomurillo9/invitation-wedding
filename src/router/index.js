import ConfirmationPage from "../views/ConfirmationPage.vue";
import LandingPage from "../views/LandingPage.vue";
import { createRouter, createWebHistory } from "vue-router";
import GiftSection from "@/components/GiftSection.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: LandingPage,
    children: [{ path: "/giftSection", component: GiftSection }],
    meta: {
      title: "base.pageTitles.saveTheDate",
    },
  },
  {
    path: "/confirmation",
    name: "ConfirmationPage",
    component: ConfirmationPage,
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

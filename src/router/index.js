import ConfirmationPage from "../views/ConfirmationPage.vue";
import TheHome from "../views/TheHome.vue";
import { createRouter, createWebHistory } from "vue-router";



const routes = [
  {
    path: "/",
    name: "home",
    component: TheHome,
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
  history: createWebHistory('/'),
  routes, 
})


router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} - G&E` || "Default Page Title";
  next();
});
export default router;

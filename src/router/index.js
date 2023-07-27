import ConfirmationPage from "../views/ConfirmationPage.vue";
import TheHome from "../views/TheHome.vue";
import { createRouter, createWebHistory } from "vue-router";


const routes = [
  {
    path: "/",
    name: "home",
    component: TheHome,
  },
  {
    path: "/confirmation",
    name: "confirmationPage",
    component: () => ConfirmationPage
  },
];

const router = createRouter({
  base: '/',
  history: createWebHistory(),
  routes, 
})

export default router;

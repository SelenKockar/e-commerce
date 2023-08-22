import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/Home.vue";
import Products from "./views/ProductDetail.vue";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    name: "Product",
    path: "/:id",
    component: Products,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;

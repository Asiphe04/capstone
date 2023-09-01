import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/AboutView.vue"),
  },
  {
    path: "/history",
    name: "history",
    component: () => import("../views/OurHistoryView.vue"),
  },
  {
    path: "/values",
    name: "values",
    component: () => import("../views/OurValuesView.vue"),
  },
  {
    path: "/mission",
    name: "mission",
    component: () => import("../views/OurMissionView.vue"),
  },
  {
    path: "/products",
    name: "products",
    component: () => import("../views/ProductsView.vue"),
  },
  {
    path: "/products/:id",
    name: "product",
    component: () => import("../views/ProductView.vue"),
    props: true,
  },
  {
    path: "/contact",
    name: "contact",
    component: () => import("../views/ContactView.vue"),
  },
  {
    path: "/admin",
    name: "admin",
    component: () => import("../views/AdminView.vue"),
    props: true,
  },
  {
    path: "/cart",
    name: "cart",
    component: () => import("../views/CartView.vue"),
    props: true,
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/LoginView.vue"),
    props: true,
  },
  {
    path: "/register",
    name: "register",
    component: () => import("../views/RegisterView.vue"),
    props: true,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;

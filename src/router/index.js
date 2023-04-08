import Vue from "vue";
import VueRouter from "vue-router";
import AuthLayout from "@/layout/AuthLayout.vue";
import { ROUTE } from "@/utils/helper";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/HomeView.vue"),
  },
  {
    path: "/login",
    name: "login",
    meta: { layout: AuthLayout },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/LoginView.vue"),
  },
  {
    path: ROUTE.SIGNUP.path,
    name: ROUTE.SIGNUP.name,
    meta: { layout: AuthLayout },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/SignupView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

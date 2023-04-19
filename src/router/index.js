import Vue from "vue";
import VueRouter from "vue-router";
import AuthLayout from "@/layout/AuthLayout.vue";
import HomeLayout from "@/layout/HomeLayout.vue";
import { ROUTE } from "@/utils/constants";
import store from "@/store";

Vue.use(VueRouter);

const routes = [
  {
    path: ROUTE.HOME.path,
    name: ROUTE.HOME.name,
    meta: { layout: HomeLayout },
    component: () =>
      import(/* webpackChunkName: "HomeView" */ "../views/HomeView.vue"),
  },
  {
    path: ROUTE.LOGIN.path,
    name: ROUTE.LOGIN.name,
    meta: { layout: AuthLayout },
    component: () =>
      import(/* webpackChunkName: "LoginView" */ "../views/LoginView.vue"),
  },
  {
    path: ROUTE.SIGNUP.path,
    name: ROUTE.SIGNUP.name,
    meta: { layout: AuthLayout },
    component: () =>
      import(/* webpackChunkName: "SignupView" */ "../views/SignupView.vue"),
  },
  {
    path: ROUTE.ASSET_DISCOVERY.path,
    name: ROUTE.ASSET_DISCOVERY.name,
    meta: { layout: HomeLayout },
    component: () =>
      import(
        /* webpackChunkName: "AssetdiscoveryView" */ "../views/AssetdiscoveryView.vue"
      ),
  },
  {
    path: ROUTE.ASSET.path,
    name: ROUTE.ASSET.name,
    meta: { layout: HomeLayout },
    component: () =>
      import(/* webpackChunkName: "AssetView" */ "../views/AssetView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const user = store.getters.isUserAuth;
  console.log("USer ", user);
  if (user && (to.path === ROUTE.LOGIN.path || to.path === ROUTE.SIGNUP.path)) {
    next({ path: ROUTE.HOME.path });
  } else if (
    (to.path === ROUTE.LOGIN.path || to.path === ROUTE.SIGNUP.path) &&
    !user
  ) {
    next();
  } else if (!user) {
    next({ path: ROUTE.LOGIN.path });
  } else {
    next();
  }
});

export default router;

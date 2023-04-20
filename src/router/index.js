import Vue from "vue";
import VueRouter from "vue-router";
import MainLayout from "@/layout/MainLayout.vue";
import { ROUTE } from "@/utils/constants";
import store from "@/store";
import { AuthenticationRoutes } from "@/Modules/Authentication/router";
import { hardwareAssetRoutes } from "@/Modules/HardwareAsset/router";
Vue.use(VueRouter);

const routes = [
  {
    path: ROUTE.HOME.path,
    name: ROUTE.HOME.name,
    meta: { layout: MainLayout },
    component: () =>
      import(/* webpackChunkName: "HomeView" */ "../views/HomeView.vue"),
  },
  ...AuthenticationRoutes,
  ...hardwareAssetRoutes,
  {
    path: "*",
    name: ROUTE.PAGENOTFOUND.name,
    component: () =>
      import(/* webpageChunkName:"UserView"*/ "@/views/NotfoundView.vue"),
    meta: {
      layout: MainLayout,
    },
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

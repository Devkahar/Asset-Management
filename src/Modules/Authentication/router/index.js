import AuthLayout from "@/Modules/Authentication/layout/AuthLayout.vue";
import { ROUTE } from "@/utils/constants";
export const AuthenticationRoutes = [
  {
    path: ROUTE.LOGIN.path,
    name: ROUTE.LOGIN.name,
    meta: { layout: AuthLayout },
    component: () =>
      import(
        /* webpackChunkName: "LoginView" */ "@/Modules/Authentication/views/LoginView.vue"
      ),
  },
  {
    path: ROUTE.SIGNUP.path,
    name: ROUTE.SIGNUP.name,
    meta: { layout: AuthLayout },
    component: () =>
      import(
        /* webpackChunkName: "SignupView" */ "@/Modules/Authentication/views/SignupView.vue"
      ),
  },
];

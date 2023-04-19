<template>
  <div class="p-10">
    <!-- Motadata Logo -->
    <Logo />
    <!-- Headline -->
    <div class="mt-5 mb-5">
      <HeadlineComponent> Motadata Support Portal Login</HeadlineComponent>
    </div>
    <!-- Login Form -->
    <Form
      :validate="validate"
      :success-handler="loginHandler"
      :loading="loading"
      buttonName="LogIn"
    />
    <p class="mt-5 text-right">
      <Link :path="signupPath">Don't have Account? Sign Up</Link>
    </p>
    <Alert v-if="error" :error="error" />
  </div>
</template>

<script>
import HeadlineComponent from "@/components/Headline.vue";
import IconsName from "@/utils/iconPath.js";
import { Error } from "@/utils/helper";
import Form from "@/components/Form.vue";
import Link from "@/components/Link.vue";
import Logo from "@/components/Logo.vue";
import { loginValidation } from "@/utils/authValidation";
import { ROUTE } from "@/utils/constants";
import { message } from "ant-design-vue/lib";
import { postClient } from "@/utils/client";
import Alert from "@/components/Alert.vue";

export default {
  name: "LoginVue",
  data: function () {
    return {
      messageIcon: IconsName.message,
      signupPath: ROUTE.SIGNUP.path,
      validate: loginValidation,
      error: null,
      loading: false,
    };
  },
  methods: {
    async loginHandler(body) {
      try {
        console.log(body);
        this.error = null;
        this.loading = true;
        const res = await postClient("authenticate", body);
        localStorage.setItem("userInfo", JSON.stringify(res.data));
        this.$store.dispatch("login");
        this.loading = false;
        message.success("Login Successfull");
        this.$router.push(ROUTE.HOME.path);
      } catch (error) {
        this.loading = false;
        this.error = new Error(
          "Auth Failed",
          error?.response?.data?.message || error.message
        );
      }
    },
  },
  components: { HeadlineComponent, Form, Link, Logo, Alert },
};
</script>

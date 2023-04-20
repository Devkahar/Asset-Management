<template>
  <div class="p-10">
    <!-- Motadata Logo -->
    <Logo />
    <!-- Headline -->
    <div class="mt-5 mb-5">
      <Headline>Motadata Support Portal Signup</Headline>
    </div>
    <!-- Login Form -->
    <Form
      :validate="validate"
      :successHandler="signupHandler"
      :loading="loading"
      buttonName="SignUp"
    />
    <p class="mt-5 text-right">
      <Link :path="loginPath">Already Have Account! Login</Link>
    </p>
    <Alert v-if="error" :error="error" />
  </div>
</template>

<script>
import Headline from "@/components/Headline.vue";
import IconsName from "@/utils/iconPath.js";
import { Error } from "@/utils/helper";
import Link from "@/components/Link.vue";
import Alert from "@/components/Alert.vue";
import Logo from "@/components/Logo.vue";
import { signupValidation } from "@/utils/form/authValidation";
import { ROUTE } from "@/utils/constants";
import { postClient } from "@/utils/http/client";
import { message } from "ant-design-vue/lib";
import Form from "../component/Form.vue";

export default {
  name: "LoginVue",
  data() {
    return {
      messageIcon: IconsName.message,
      loginPath: ROUTE.LOGIN.path,
      validate: signupValidation,
      error: null,
      loading: false,
    };
  },
  methods: {
    async signupHandler(body) {
      try {
        console.log(body);
        this.error = null;
        this.loading = true;
        delete body["confirmPassword"];
        const res = await postClient("register", body);
        this.loading = false;
        localStorage.setItem("userInfo", JSON.stringify(res.data));
        this.$store.dispatch("signUp");
        message.success("User Registered Successfully");
        this.$router.push(ROUTE.HOME.path);
      } catch (error) {
        this.error = new Error(
          "Auth Failed",
          error?.response?.data?.message || error.message
        );
        this.loading = false;
      }
    },
  },

  components: { Headline, Form, Link, Alert, Logo },
};
</script>

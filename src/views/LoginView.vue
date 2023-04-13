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
      :success-handler="() => {}"
      :loading="false"
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

export default {
  name: "LoginVue",
  data: function () {
    return {
      messageIcon: IconsName.message,
      signupPath: ROUTE.SIGNUP.path,
      validate: loginValidation,
      error: null,
    };
  },
  methods: {
    loginHandler(data) {
      console.log(data);
      if (!data) {
        this.error = new Error("Error", "Message");
      }
    },
  },
  components: { HeadlineComponent, Form, Link, Logo },
};
</script>

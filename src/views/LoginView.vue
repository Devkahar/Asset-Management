<template>
  <div class="p-10">
    <!-- Motadata Logo -->
    <div class="h-10">
      <img :src="logo" class="h-full" />
    </div>
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
import logo from "@/assets/logo.avif";
import HeadlineComponent from "@/components/Headline.vue";
import IconsName from "@/utils/iconPath.js";
import { ROUTE, emailValidate, passwordValidate, Error } from "@/utils/helper";
import Form from "@/components/Form.vue";
import Link from "@/components/Link.vue";

export default {
  name: "LoginVue",
  data: function () {
    return {
      logo,
      messageIcon: IconsName.message,
      signupPath: ROUTE.SIGNUP.path,
      validate: [emailValidate, passwordValidate],
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
  components: { HeadlineComponent, Form, Link },
};
</script>

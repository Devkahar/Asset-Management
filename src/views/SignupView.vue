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
      :successHandler="() => {}"
      :loading="false"
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
import Form from "@/components/Form.vue";
import Link from "@/components/Link.vue";
import Alert from "@/components/Alert.vue";
import Logo from "@/components/Logo.vue";
import { signupValidation } from "@/utils/authValidation";
import { ROUTE } from "@/utils/constants";

export default {
  name: "LoginVue",
  data() {
    return {
      messageIcon: IconsName.message,
      loginPath: ROUTE.LOGIN.path,
      validate: signupValidation,
      error: null,
    };
  },
  methods: {
    signupHandler(data) {
      console.log(data);
      if (!data) {
        this.error = new Error("Error", "Message");
      }
    },
  },

  components: { Headline, Form, Link, Alert, Logo },
};
</script>

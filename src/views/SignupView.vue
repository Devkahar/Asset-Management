<template>
  <div class="p-10">
    <!-- Motadata Logo -->
    <div class="h-10">
      <img :src="logo" class="h-full" />
    </div>
    <!-- Headline -->
    <div class="mt-5 mb-5">
      <Headline>Motadata Support Portal Signup</Headline>
    </div>
    <!-- Login Form -->
    <Form
      :validate="validate"
      :init="setForm"
      :success-handler="() => {}"
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
import logo from "@/assets/logo.avif";
import Headline from "@/components/Headline.vue";
import IconsName from "@/utils/iconPath.js";
import {
  ROUTE,
  emailValidate,
  passwordValidate,
  passwordConfirmValidate,
  userNameValidate,
  Error,
} from "@/utils/helper";
import Form from "@/components/Form.vue";
import Link from "@/components/Link.vue";
import Alert from "@/components/Alert.vue";

export default {
  name: "LoginVue",
  data() {
    return {
      logo,
      messageIcon: IconsName.message,
      loginPath: ROUTE.LOGIN.path,
      validate: [
        userNameValidate,
        emailValidate,
        passwordValidate,
        passwordConfirmValidate,
      ],
      form: null,
      error: null,
    };
  },
  created() {
    passwordConfirmValidate.decorator[1].rules = [
      ...passwordConfirmValidate.decorator[1].rules,
      { validator: this.confirmPasswordValidate },
    ];
  },
  methods: {
    confirmPasswordValidate(_, value, callback) {
      const form = this.form;
      if (value && value !== form.getFieldValue("password")) {
        callback("Two passwords that you enter is inconsistent!");
      } else {
        callback();
      }
    },
    setForm(form) {
      this.form = form;
    },
    signupHandler(data) {
      console.log(data);
      if (!data) {
        this.error = new Error("Error", "Message");
      }
    },
  },

  components: { Headline, Form, Link, Alert },
};
</script>

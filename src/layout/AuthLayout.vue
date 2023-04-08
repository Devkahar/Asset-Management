<template>
  <div class="flex h-screen items-center">
    <div class="container mx-auto my-auto">
      <div class="min-h-4/5 flex rounded-lg border-2 shadow-cyan-500/50">
        <div class="w-1/2">
          <slot></slot>
        </div>
        <div class="w-1/2 rounded-r-lg">
          <img
            :src="authImage"
            class="rounded-r-lg w-full h-full bg-primary-color p-5"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import authImage from "@/assets/login-signup.svg";
export default {
  name: "AuthLayout",
  data: function () {
    return {
      authImage,
    };
  },
};
</script>

<template>
  <div class="h-12 w-26 max-w-fit">
    <Link :path="homeLink">
      <img :src="logo" class="h-full" />
    </Link>
  </div>
</template>
<script>
import logo from "@/assets/logo.avif";
import { ROUTE } from "@/utils/constants";
import Link from "./Link.vue";
export default {
  name: "LogoComponent",
  data() {
    return {
      homeLink: ROUTE.HOME.path,
      logo,
    };
  },
  components: { Link },
};
</script>

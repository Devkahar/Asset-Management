<template>
  <a-result
    status="404"
    title="404"
    sub-title="Sorry, the page you visited does not exist."
  >
    <template #extra>
      <Button :click="redirectToHomePage"> Go To Home </Button>
    </template>
  </a-result>
</template>

<script>
import Button from "@/components/Button.vue";
import { ROUTE } from "@/utils/constants";

export default {
  name: "PageNotFound",
  components: { Button },
  methods: {
    redirectToHomePage: function () {
      this.$router.push({ name: ROUTE.HOME.name });
    },
  },
};
</script>

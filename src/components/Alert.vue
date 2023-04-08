<template>
  <div class="mt-5 mb-5 text-left">
    <a-alert
      :message="error.title"
      :description="error.message"
      type="error"
      show-icon
    />
  </div>
</template>

<script>
import { Error } from "@/utils/helper";
export default {
  name: "AlertComponent",
  props: {
    error: {
      type: Error,
      required: true,
    },
  },
};
</script>

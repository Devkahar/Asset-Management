<template>
  <div class="">
    <Skeleton v-if="loading" />
    <a-result v-else-if="error" status="404" :title="error.message"> </a-result>
    <div v-else>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { Error } from "@/utils/helper";
// import Alert from "./Alert.vue";
import Skeleton from "./Skeleton.vue";

export default {
  name: "SkeletonComponent",
  props: {
    loading: {
      type: Boolean,
      required: true,
    },
    error: {
      type: Error,
      required: true,
    },
  },
  components: { Skeleton },
};
</script>

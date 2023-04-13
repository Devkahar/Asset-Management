<template>
  <div class="">
    <Skeleton v-if="loading" />
    <Alert v-else-if="error" :error="error" />
    <div v-else>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { Error } from "@/utils/helper";
import Alert from "./Alert.vue";
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
  components: { Skeleton, Alert },
};
</script>

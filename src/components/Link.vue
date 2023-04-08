<template functional>
  <router-link :to="props.path">
    <slot>Link</slot>
  </router-link>
</template>

<script>
export default {
  name: "LinkComponent",
  props: {
    path: {
      type: String,
      required: true,
    },
  },
};
</script>

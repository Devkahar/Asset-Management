<template>
  <font-awesome-icon :icon="icon" />
</template>

<script>
export default {
  name: "IconComponent",
  props: {
    icon: {
      required: true,
      type: String,
    },
  },
};
</script>

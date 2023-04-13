<template>
  <div :class="[padded ? 'p-2' : '']">
    <font-awesome-icon :icon="icon" />
  </div>
</template>

<script>
export default {
  name: "IconComponent",
  props: {
    icon: {
      required: true,
      type: String,
    },
    padded: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

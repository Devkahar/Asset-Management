<template>
  <a-avatar style="background-color: #099dd9" :size="size">
    <slot></slot>
  </a-avatar>
</template>

<script>
export default {
  name: "AvatarComponent",
  props: {
    size: {
      default: "large",
    },
  },
};
</script>

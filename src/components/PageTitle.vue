<template>
  <div class="flex items-center mb-3">
    <slot name="head"></slot>
    <h1 :class="[`text-${size}xl m-0 p-0 text-primary-color`]">
      <slot>Page Title </slot>
    </h1>
  </div>
</template>

<script>
export default {
  name: "PageTitle",
  props: {
    size: {
      type: Number,
      default: 3,
    },
  },
};
</script>

<template>
  <a-button
    type="primary"
    @click="click"
    :loading="loading"
    block
    :html-type="htmlType"
  >
    <slot>Click Me</slot>
  </a-button>
</template>

<script>
export default {
  name: "ButtonComponent",
  props: {
    loading: {
      type: Boolean,
      required: false,
      default: false,
    },
    click: {
      type: Function,
      required: false,
      default: () => {},
    },
    htmlType: {
      type: String,
      default: "submit",
    },
  },
};
</script>

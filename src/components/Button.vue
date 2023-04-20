<template>
  <a-button
    :type="type"
    @click="click"
    :loading="loading"
    :html-type="htmlType"
    size="large"
    :shape="shape"
    :block="block"
  >
    <div class="w-full flex items-center justify-center">
      <slot>Click Me</slot>
      <slot name="tail"></slot>
    </div>
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
      default: "button",
    },
    shape: {
      type: String,
      default: "round",
    },
    block: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: "primary",
    },
  },
};
</script>

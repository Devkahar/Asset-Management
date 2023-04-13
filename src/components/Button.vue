<template>
  <a-button
    type="primary"
    @click="click"
    :loading="loading"
    :html-type="htmlType"
    size="large"
    :shape="shape"
    :block="block"
  >
    <div class="flex items-center justify-center">
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
      default: "default",
    },
    block: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

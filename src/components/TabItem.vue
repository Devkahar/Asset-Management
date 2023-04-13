<template>
  <a-tab-pane :key="id" :tab="tab">
    <slot></slot>
  </a-tab-pane>
</template>

<script>
export default {
  name: "TabItem",
  props: {
    id: {
      type: String,
      required: true,
    },
    tab: {
      type: String,
      required: true,
    },
  },
  methods: {
    callback(key) {
      console.log(key);
    },
  },
};
</script>

<template>
  <a-tabs :default-active-key="activeKey" @change="callback">
    <slot></slot>
  </a-tabs>
</template>

<script>
export default {
  name: "TabComponent",
  props: {
    activeKey: {
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

<template>
  <a-input v-decorator="decorator" />
</template>

<script>
export default {
  name: "InputComponent",
  props: {
    decorator: {
      required: true,
      type: Array,
    },
  },
};
</script>

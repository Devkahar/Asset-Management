<template>
  <a-select
    :placeholder="placeholder"
    :default-value="initialValues"
    mode="multiple"
  >
    <a-select-option
      v-for="option in options"
      :key="option.id"
      :value="option.id"
    >
      {{ option.value }}
    </a-select-option>
  </a-select>
</template>

<script>
export default {
  name: "SelectCredentials",
  data() {
    return {};
  },
};
</script>

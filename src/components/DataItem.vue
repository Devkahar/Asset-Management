<template>
  <div>
    <h6 class="font-extrabold">{{ title }}</h6>
    <span>{{ formatString() }}</span>
  </div>
</template>

<script>
export default {
  name: "DataItem",
  methods: {
    formatString() {
      if (!this.body) return "---";
      if (this.type === "date") {
        const date = new Date(this.body);
        return date.toLocaleDateString();
      }
      return this.body;
    },
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    type: {
      String,
      required: true,
    },
  },
};
</script>

<template>
  <div v-if="display">
    <h6 class="font-extrabold">{{ title }}</h6>
    <span>{{ formatString() }}</span>
  </div>
</template>

<script>
import {
  getFrequencyString,
  getDateString,
  getByteString,
} from "@/utils/helper";
import { keyValue } from "@/utils/options";

export default {
  name: "DataItem",
  methods: {
    formatString() {
      if (!this.body) return "---";
      if (this.type === "date") {
        return getDateString(this.body);
      }
      if (this.type === "option") {
        return keyValue[this.body] ?? "---";
      }
      if (this.suffix === "Bytes") {
        return getByteString(this.body);
      }
      if (this.suffix === "Frequency") {
        return getFrequencyString(this.body);
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
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    display: {
      type: Boolean,
      default: true,
    },
    suffix: {
      type: String,
      required: true,
    },
  },
};
</script>

<template>
  <div class="">
    <h2 class="text-2xl">Edit Detail</h2>
    <div class="">
      <EditAssetItem
        v-for="key in fieldName"
        :title="assetItems[key].placeholder"
        :value="assetItems[key].initialValue"
        :assetKey="key"
        :key="key"
      />
    </div>
  </div>
</template>

<script>
import { assetFieldName } from "@/utils/form/asset";
import EditAssetItem from "./EditAssetItem.vue";

export default {
  name: "EditAsset",
  data() {
    return {
      fieldName: this.convertToArray(assetFieldName),
    };
  },
  props: {
    assetItems: {
      type: Object,
      required: true,
    },
  },
  methods: {
    convertToArray(obj) {
      return Object.entries(obj).map((el) => el[1]);
    },
  },
  components: { EditAssetItem },
};
</script>

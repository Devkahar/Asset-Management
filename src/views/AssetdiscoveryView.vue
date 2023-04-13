<template>
  <a-tabs
    :default-active-key="list[0].key"
    @change="changeTabHandler"
    :tabPosition="'left'"
  >
    <a-tab-pane v-for="items in list" v-bind:key="items.key" :tab="items.title">
      {{ items.key }}
    </a-tab-pane>
  </a-tabs>
</template>

<script>
// import Data from "@/components/Data.vue";
import { assetDiscoveryField } from "@/utils/helper";
export default {
  name: "AssetdiscoveryView",
  data() {
    return {
      list: this.getArray(assetDiscoveryField),
      currentTab: assetDiscoveryField.credentials,
    };
  },
  methods: {
    getArray(obj) {
      let arr = Object.entries(obj).map((el) => el[1]);
      return arr;
    },
    changeTabHandler(key) {
      this.currentTab = key;
    },
  },
  components: {},
};
</script>

<template>
  <a-tabs
    :default-active-key="list[0].key"
    @change="changeTabHandler"
    :tabPosition="'left'"
  >
    <a-tab-pane v-for="items in list" v-bind:key="items.key" :tab="items.title">
      <Data
        v-if="getTab === items.key"
        :tab="getTab"
        :parentFieldName="getParent"
        :key="items.key"
      />
    </a-tab-pane>
  </a-tabs>
</template>

<script>
import Data from "@/components/Data.vue";
import { assetDiscoveryField } from "@/utils/tabs/discoveryTabs";
import { mainFieldName } from "@/utils/tabs/index";
export default {
  name: "AssetdiscoveryView",
  data() {
    return {
      list: this.getArray(assetDiscoveryField),
      currentTab: assetDiscoveryField.credentials.key,
      parentFieldName: mainFieldName.getAssetDiscoveryFields,
    };
  },
  computed: {
    getTab() {
      return this.currentTab;
    },
    getParent() {
      return this.parentFieldName;
    },
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
  components: { Data },
};
</script>

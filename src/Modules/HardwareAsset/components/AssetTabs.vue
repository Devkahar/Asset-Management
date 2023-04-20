<template>
  <a-tabs :default-active-key="list[0].key" @change="parentTabChange">
    <a-tab-pane v-for="items in list" v-bind:key="items.key" :tab="items.title">
      <a-tabs
        :default-active-key="items.subFields[0].key"
        tabPosition="left"
        @change="tabChangeHandler"
      >
        <a-tab-pane
          v-for="subItems in items.subFields"
          v-bind:key="subItems.key"
          :tab="subItems.title"
        >
          <Data
            v-if="currentTab === subItems.key"
            :tab="currentTab"
            :parent-field-name="parentFieldName"
            :key="currentTab"
          />
        </a-tab-pane>
      </a-tabs>
    </a-tab-pane>
  </a-tabs>
</template>

<script>
import { mainFieldName } from "@/utils/tabs";
import Data from "./Data.vue";

export default {
  name: "AssetTabs",
  data() {
    return {
      list: this.getArray(this.fields),
      currentTab: this.tab,
      last: null,
      parentFieldName: mainFieldName.getAssetFileds,
    };
  },
  methods: {
    getArray(obj) {
      let arr = Object.entries(obj).map((el) => el[1]);
      arr.forEach((el, idx) => {
        if (el.subFields) {
          arr[idx].subFields = this.getArray(el.subFields);
        }
      });
      return arr;
    },
    tabChangeHandler(key) {
      this.currentTab = key;
    },
    parentTabChange(key) {
      let next = this.currentTab;
      this.tabChangeHandler(
        this.last ? this.last : this.fields[key].subFields[0].key
      );
      this.last = next;
    },
  },
  props: {
    fields: {
      type: Object,
      required: true,
    },
    tab: {
      type: String,
      required: true,
    },
  },
  components: { Data },
};
</script>

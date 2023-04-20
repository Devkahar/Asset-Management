<template>
  <FetchLayout :loading="loading" :error="error">
    <div v-if="error === null && !loading">
      <div>
        <PageTitle :size="2">
          <template #head>
            <PageBack />
          </template>
          {{ pageTitle }}</PageTitle
        >
      </div>
      <div class="grid grid-cols-12 gap-4">
        <div class="border-r-2 col-span-10 p-4">
          <!-- Asset Items -->
          <AssetItem :title="'Asset Type'" :body="getAssetType" />
          <!--  Tabs -->
          <AssetsTabs :tab="tab" :fields="fields" />
        </div>
        <!-- Asset  -->
        <div class="col-span-2">
          <EditAsset :assetItems="assetItems" />
        </div>
      </div>
    </div>
  </FetchLayout>
</template>

<script>
import AssetItem from "@/Modules/HardwareAsset/components/AssetItem.vue";
import AssetsTabs from "@/Modules/HardwareAsset/components/AssetTabs.vue";
import EditAsset from "@/Modules/HardwareAsset/components/EditAsset.vue";
import FetchLayout from "@/components/FetchLayout.vue";
import PageBack from "@/components/PageBack.vue";
import PageTitle from "@/components/PageTitle.vue";
import { subFieldsName } from "@/utils/form/formName";
import { assetFields } from "@/utils/tabs/assetTabs";
export default {
  name: "AssetView",
  data() {
    return {
      fields: assetFields,
      tab: subFieldsName.hardwareProperties,
    };
  },
  computed: {
    pageTitle() {
      return this.assetItems?.hostName?.initialValue ?? "";
    },
    getAssetType() {
      return this.assetItems?.assetType?.initialValue ?? "";
    },
    loading() {
      return this.$store.state.assetState.loading;
    },
    error() {
      return this.$store.state.assetState.error;
    },
    assetItems() {
      return this.$store.getters.assetItems;
    },
  },
  inject: ["id"],
  methods: {},
  components: {
    PageTitle,
    AssetItem,
    PageBack,
    AssetsTabs,
    FetchLayout,
    EditAsset,
  },
  created() {
    this.$store.dispatch("fetchAssetDetail", {
      id: this.id,
    });
  },
};
</script>

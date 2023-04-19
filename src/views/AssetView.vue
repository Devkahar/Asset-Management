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
import AssetItem from "@/components/AssetItem.vue";
import AssetsTabs from "@/components/AssetsTabs.vue";
import EditAsset from "@/components/EditAsset.vue";
import FetchLayout from "@/components/FetchLayout.vue";
import PageBack from "@/components/PageBack.vue";
import PageTitle from "@/components/PageTitle.vue";
// import { getClient } from "@/utils/client";
// import { assetField, assetFieldName } from "@/utils/form/asset";
import { subFieldsName } from "@/utils/form/formName";
import { assetFields } from "@/utils/helper";
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
      return this.$store.state.assetState.assetItems;
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

<template>
  <div>
    <PageTitle :size="2"> Hardware Asset </PageTitle>
    <FetchLayout :loading="false" :error="null">
      <AssetTable />
    </FetchLayout>
  </div>
</template>

<script>
import FetchLayout from "@/components/FetchLayout.vue";
import PageTitle from "./PageTitle.vue";
import AssetTable from "./AssetTable.vue";

export default {
  name: "HomeComponent",
  components: { FetchLayout, PageTitle, AssetTable },
};
</script>

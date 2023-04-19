<template>
  <div>
    <PageTitle :size="2"> Hardware Asset </PageTitle>
    <FetchLayout :loading="false" :error="null">
      <DisplayAssets />
    </FetchLayout>
  </div>
</template>

<script>
import FetchLayout from "@/components/FetchLayout.vue";
import PageTitle from "./PageTitle.vue";
import DisplayAssets from "./DisplayAssets.vue";

export default {
  name: "HomeComponent",
  components: { FetchLayout, PageTitle, DisplayAssets },
};
</script>

<template>
  <div>
    <PageTitle :size="2"> Hardware Asset </PageTitle>
    <FetchLayout :loading="false" :error="null">
      <TableComponent />
    </FetchLayout>
  </div>
</template>

<script>
import FetchLayout from "@/components/FetchLayout.vue";
import PageTitle from "./PageTitle.vue";
import TableComponent from "./TableComponent.vue";

export default {
  name: "HomeComponent",
  components: { FetchLayout, PageTitle, TableComponent },
};
</script>

<template>
  <a-table
    :loading="loading"
    :columns="columns"
    :data-source="data"
    ref="table"
    :pagination="false"
    :change="pageChangeHandler"
  >
    <a slot="id" slot-scope="id">
      <Link :path="`/${id}`"> AST-{{ id }} </Link>
    </a>
    <span slot="customTitle"><a-icon type="smile-o" /> Name</span>
    <template #footer>
      <div class="w-full flex justify-between items-center">
        <div class="">
          <p class="text-1xl">Totol Assets Discovered: {{ totalItems }}</p>
        </div>
        <a-pagination
          show-size-changer
          :default-current="pageNo"
          :total="totalItems"
          @showSizeChange="onShowSizeChange"
          :pageSizeOptions="['5', '10', '25', '50']"
          :defaultPageSize="pageSize"
          @change="pageChangeHandler"
        />
      </div>
    </template>
  </a-table>
</template>

<script>
import { getClient } from "@/utils/http/client";
import {
  hardWareAssetColumn,
  generateHardWareAssetData,
} from "@/Modules/HardwareAsset/utils/table/hardwareAssetTable";
import Link from "../../../components/Link.vue";
export default {
  name: "AssetTable",
  data() {
    return {
      columns: hardWareAssetColumn,
      data: [],
      loading: false,
      totalItems: 0,
      pageSize: 5,
      pageNo: 1,
    };
  },
  methods: {
    async fetchData() {
      try {
        this.loading = true;
        const res = await getClient(
          `asset?pageNo=${this.pageNo - 1}&pageSize=${
            this.pageSize
          }&sortBy=id&sortDir=asc`
        );
        this.loading = false;
        console.log(res);
        this.data = res.data.assetRestList.map((el) => {
          return generateHardWareAssetData(
            el.id,
            el.assetType,
            el.assetName,
            el.hostName,
            el.ipAddress,
            el.serialNumber,
            el.macAddress,
            el.subNetMask
          );
        });
        this.totalItems = res.data.totalElements;
      } catch (error) {
        this.loading = false;
        console.log(error);
      }
    },
    onShowSizeChange(current, pageSize) {
      this.pageSize = pageSize;
      this.fetchData();
    },
    pageChangeHandler(page, size) {
      console.log(page, size);
      this.pageNo = page;
      this.fetchData();
    },
  },
  created() {
    this.fetchData();
  },
  components: { Link },
};
</script>

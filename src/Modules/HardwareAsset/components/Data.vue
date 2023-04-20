<template>
  <div class="">
    <div v-if="field.avilaction.add" class="flex justify-end mb-3">
      <Button
        :click="() => actionHandler(field.avilaction.add)"
        :shape="'round'"
        >Add {{ tab }}</Button
      >
    </div>
    <FetchLayout :loading="loading" :error="error">
      <div class="">
        <div>
          <div
            class="border-2 p-3 mb-5"
            v-for="dataItem in data"
            v-bind:key="dataItem.fieldData?.placeholder"
          >
            <div class="">
              <!-- Actions -->
              <DataAction
                :data="dataItem"
                :actionHandler="actionHandler"
                :availableAction="field.avilaction"
              />
              <div class="grid grid-cols-4 gap-4">
                <DataItem
                  v-for="key in field.fieldName"
                  :key="key"
                  :title="dataItem?.fieldData[key]?.placeholder ?? ''"
                  :body="dataItem?.fieldData[key]?.initialValue ?? ''"
                  :type="dataItem?.fieldData[key]?.type ?? 'text'"
                  :display="dataItem?.fieldData[key]?.display ?? false"
                  :suffix="dataItem?.fieldData[key]?.suffix ?? ''"
                />
              </div>
            </div>
          </div>
        </div>
        <div v-if="data.length === 0" class="">
          <a-result status="warning" title="Resource Not Found"> </a-result>
        </div>
      </div>
    </FetchLayout>
  </div>
</template>

<script>
import DataItem from "./DataItem.vue";
import { deleteClient, getClient } from "@/utils/http/client";
import { actions } from "@/utils/form/formAction";
import { convertToArray } from "@/utils/helper";
import { mainFieldName } from "@/utils/tabs/index";
import { formField } from "@/store/storeActions";
import { message } from "ant-design-vue/lib";
import { forms } from "@/utils/form/formName";
import { schedulerFiled, schedulerFiledName } from "@/utils/form/scheduler";
import { getArrayOfFieldFromApi } from "@/utils/http/resDataConversion";
import DataAction from "./DataAction.vue";
import Button from "@/components/Button.vue";
export default {
  name: "DataComponent",
  inject: ["changeForm", "id"],
  data() {
    return { parentId: "" };
  },
  computed: {
    field() {
      return this.$store.getters.field;
    },
    loading() {
      return this.$store.state.formFieldState.loading;
    },
    error() {
      return this.$store.state.formFieldState.error;
    },
    data() {
      return this.$store.state.formFieldState.data;
    },
  },
  methods: {
    getEndUrl(option) {
      if (
        this.parentFieldName === mainFieldName.getAssetDiscoveryFields &&
        option.payload?.id
      ) {
        return "/" + option.payload.id;
      }
      if (option?.id && this.field.avilaction.add) {
        return "/" + option.id;
      }
      return "";
    },
    async deleteData(url) {
      try {
        await deleteClient(url);
        message.success("Deleted Successfully");
        this.fetchData();
      } catch (error) {
        message.error(error.message);
      }
    },
    async scanNetwork(id) {
      try {
        message.success("Running Network Scan");
        await getClient(`networkScan/scan/${id}`);
        message.success("Network Scan Complete");
      } catch (error) {
        message.error(error.response?.data?.message || error.message);
      }
    },
    async addScheduler(id) {
      try {
        const res = await getClient(`networkScan/${id}/addScheduler`);
        const data = getArrayOfFieldFromApi(
          [res.data],
          schedulerFiled,
          convertToArray(schedulerFiledName)
        );
        this.changeForm(
          forms.SCHEDULE,
          data[0].fieldData,
          actions.edit,
          { payload: data[0].payload },
          `networkScan/${id}/addScheduler/${data[0].payload.id}`,
          () => {}
        );
      } catch (error) {
        console.log("Scheduler Already Exist", error);
        this.changeForm(
          forms.SCHEDULE,
          schedulerFiled,
          actions.add,
          {},
          `networkScan/${id}/addScheduler`,
          () => {}
        );
      }
    },
    actionHandler(
      action = actions.add,
      data = this.field.fieldData,
      option = {}
    ) {
      let url = this.field.url + this.getEndUrl(option);
      if (action.placeholder === actions.schedule.placeholder) {
        this.addScheduler(option.id);
        return;
      }
      if (action.placeholder === actions.search.placeholder) {
        this.scanNetwork(option.id);
        return;
      }
      if (action.actionType === actions.delete.actionType) {
        this.deleteData(url);
        return;
      }
      this.changeForm(
        this.field.formName,
        data,
        action,
        option,
        url,
        this.fetchData
      );
    },
    initState() {
      this.$store.dispatch(formField.actions.setFieldInitState, {
        tab: this.tab,
        id: this.id,
        mainFieldName: this.parentFieldName,
      });
      this.fetchData();
    },
    fetchData() {
      this.$store.dispatch(formField.actions.fetchFieldData);
    },
  },
  props: {
    tab: {
      type: String,
      required: true,
    },
    parentFieldName: {
      type: String,
      required: true,
    },
  },
  watch: {},
  created() {
    this.initState();
  },
  destroyed() {},
  components: { DataItem, Button, DataAction },
};
</script>
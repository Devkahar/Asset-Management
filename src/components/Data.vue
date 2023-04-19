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
            <!-- Actions -->
            <div class="">
              <div class="flex justify-end">
                <div
                  v-if="field.avilaction.schedule"
                  class="cursor-pointer mr-3"
                  @click="
                    () =>
                      actionHandler(
                        field.avilaction.schedule,
                        {},
                        {
                          id: dataItem.payload.id,
                          payload: {},
                        }
                      )
                  "
                >
                  <Icon :icon="field.avilaction.schedule.icon" />
                </div>
                <div
                  v-if="field.avilaction.search"
                  class="cursor-pointer mr-3"
                  @click="
                    () =>
                      actionHandler(
                        field.avilaction.search,
                        {},
                        {
                          id: dataItem.payload.id,
                          payload: {},
                        }
                      )
                  "
                >
                  <Icon :icon="field.avilaction.search.icon" />
                </div>
                <div
                  v-if="field.avilaction.edit"
                  class="cursor-pointer mr-3"
                  @click="
                    () =>
                      actionHandler(field.avilaction.edit, dataItem.fieldData, {
                        id: field.avilaction.add
                          ? dataItem.payload.id
                          : dataItem.payload.refId,
                        payload: dataItem.payload,
                      })
                  "
                >
                  <Icon :icon="field.avilaction.edit.icon" />
                </div>
                <div
                  v-if="field.avilaction.delete"
                  class="cursor-pointer mr-3"
                  @click="
                    () =>
                      actionHandler(
                        field.avilaction.delete,
                        dataItem.fieldData,
                        {
                          id: field.avilaction.add
                            ? dataItem.payload.id
                            : dataItem.payload.refId,
                          payload: dataItem.payload,
                        }
                      )
                  "
                >
                  <Icon :icon="field.avilaction.delete.icon" />
                </div>
              </div>
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
import { deleteClient, getClient } from "@/utils/client";
import Button from "./Button.vue";
import Icon from "./Icon.vue";
import FetchLayout from "./FetchLayout.vue";
import { actions } from "@/utils/form/formAction";
import { mainFieldName } from "@/utils/helper";
import { formField } from "@/store/storeActions";
import { message } from "ant-design-vue/lib";
import { forms } from "@/utils/form/formName";
import { schedulerFiled } from "@/utils/form/scheduler";
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
    async actionHandler(
      action = actions.add,
      data = this.field.fieldData,
      option = {}
    ) {
      if (action.placeholder === actions.schedule.placeholder) {
        this.changeForm(
          forms.SCHEDULE,
          schedulerFiled,
          actions.add,
          {},
          "url",
          null
        );
        return;
      }
      if (action.placeholder === actions.search.placeholder) {
        this.scanNetwork(option.id);
        return;
      }
      let end = "";
      if (
        this.parentFieldName === mainFieldName.getAssetDiscoveryFields &&
        option.payload?.id
      ) {
        end = "/" + option.payload.id;
      }
      if (option?.id && this.field.avilaction.add) {
        end = "/" + option.id;
      }
      if (action.actionType === actions.delete.actionType) {
        this.deleteData(this.field.url + end);
        return;
      }
      this.changeForm(
        this.field.formName,
        data,
        action,
        option,
        this.field.url + end,
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
  components: { DataItem, Button, Icon, FetchLayout },
};
</script>

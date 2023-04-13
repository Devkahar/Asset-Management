<template>
  <FetchLayout :loading="loading" :error="error">
    <div class="">
      <div v-if="field.avilaction.add" class="flex justify-end mb-3">
        <Button
          :click="() => actionHandler(field.avilaction.add)"
          :shape="'round'"
          >Add {{ tab }}</Button
        >
      </div>
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
                    actionHandler(field.avilaction.delete, dataItem.fieldData, {
                      id: field.avilaction.add
                        ? dataItem.payload.id
                        : dataItem.payload.refId,
                      payload: dataItem.payload,
                    })
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
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </FetchLayout>
</template>

<script>
import DataItem from "./DataItem.vue";
import { deleteClient } from "@/utils/client";
import Button from "./Button.vue";
import Icon from "./Icon.vue";
import FetchLayout from "./FetchLayout.vue";
import { actions } from "@/utils/form/formAction";
// import { getAssetFileds } from "@/utils/helper";
export default {
  name: "DataComponent",
  inject: ["changeForm", "id"],
  computed: {
    field() {
      return this.$store.getters.field;
    },
    loading() {
      return this.$store.state.assetPropertyState.loading;
    },
    error() {
      return this.$store.state.assetPropertyState.error;
    },
    data() {
      return this.$store.state.assetPropertyState.data;
    },
  },

  watch: {},
  methods: {
    convertToArray(obj) {
      return Object.entries(obj).map((el) => el[1]);
    },
    async deleteData(url) {
      try {
        const res = await deleteClient(url);
        console.log(res);
        this.fetchData();
      } catch (error) {
        console.log(error);
      }
    },
    actionHandler(
      action = actions.add,
      data = this.field.fieldData,
      option = {}
    ) {
      if (action.actionType === actions.add.actionType) {
        for (let i in data) {
          data[i].initialValue = "";
        }
      }
      console.log("Clicked ", this.field.formName, data, action, option);
      let end = "";
      if (option.id && this.field.avilaction.add) {
        end = "/" + option.id;
      }
      if (action.actionType === actions.delete.actionType) {
        this.deleteData(this.field.url + end);
        return;
      }
      this.changeForm(
        this.field.formName,
        JSON.parse(JSON.stringify(data)),
        action,
        option,
        this.field.url + end
      );
    },
  },
  props: {
    tab: {
      type: String,
      required: true,
    },
  },
  created() {
    this.$store.dispatch("setAssetDIscoveryInitState", {
      tab: this.tab,
      id: this.id,
    });
    this.$store.dispatch("fetchAssetDiscoveryDetail");
    console.log("Call By created");
  },
  components: { DataItem, Button, Icon, FetchLayout },
};
</script>

<template>
  <FetchLayout :error="error" :loading="loading">
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
          <div class="grid grid-cols-6 gap-4">
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
  </FetchLayout>
</template>

<script>
import { getClient } from "@/utils/client";
import { getAssetDiscoveryField, convertToArray } from "@/utils/helper";
import DataItem from "./DataItem.vue";
import FetchLayout from "./FetchLayout.vue";

export default {
  name: "DisplayCredential",
  data() {
    return {
      data: [],
      error: null,
      loading: false,
    };
  },
  computed: {
    field() {
      const assetField = getAssetDiscoveryField[this.tab];
      return {
        add: assetField.add ?? false,
        avilaction: assetField.actions,
        url: assetField.url,
        formName: assetField.formName,
        fieldData: assetField.fieldData,
        fieldName: convertToArray(assetField.fieldName),
      };
    },
  },
  methods: {
    async fetchData() {
      try {
        const res = await getClient(`${this.field.url}`);
        const resData = res.data;
        console.log(resData);
        const data = resData.map((el) => {
          let dataItem = JSON.parse(JSON.stringify(this.field.fieldData));
          for (let i in this.field.fieldName) {
            const key = this.field.fieldName[i];
            dataItem[key].initialValue = el[key];
          }
          const payload = {};
          Object.entries(el)
            .filter((el) => {
              const key = el[0];
              for (let i in this.field.fieldName) {
                let key2 = this.field.fieldName[i];
                if (key == key2) return false;
              }
              return true;
            })
            .map((el) => {
              payload[el[0]] = el[1];
            });
          return {
            fieldData: dataItem,
            payload,
          };
        });
        console.log(data);
        this.data = data;
        this.loading = false;
      } catch (error) {
        this.loading = false;
        this.error = Error(error);
      }
    },
  },
  components: { DataItem, FetchLayout },

  props: {
    tab: {
      type: String,
      required: true,
    },
  },
};
</script>

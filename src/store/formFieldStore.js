import { getClient } from "@/utils/client";
import { credentialFieldName } from "@/utils/form/credential";
import { subFieldsName } from "@/utils/form/formName";
import { networkDiscoveryFieldNames } from "@/utils/form/networkScan";
import { mainField, mainFieldName } from "@/utils/helper";
import { ipRangeOptions } from "@/utils/options";
import { formField } from "@/store/storeActions";
const convertToArray = (obj) => {
  return Object.entries(obj).map((el) => el[1]);
};
const formFieldStore = {
  state: () => ({
    data: [],
    loading: false,
    error: null,
    tab: subFieldsName.hardwareProperties,
    id: "",
    mainFieldName: mainFieldName.getAssetDiscoveryFields,
    isActive: false,
    nonEdit: [networkDiscoveryFieldNames.ipRangeType],
    hideFields: [
      credentialFieldName.password,
      networkDiscoveryFieldNames.ipRangeStart,
      networkDiscoveryFieldNames.ipList,
    ],
  }),
  getters: {
    field(state) {
      const assetField = mainField[state.mainFieldName][state.tab];
      console.log("[asset Field]", assetField, state.mainFieldName, state.tab);
      console.log("[asset Field]-->", mainField);
      if (!assetField) return {};
      let url;
      if (state.mainFieldName === mainFieldName.getAssetFileds) {
        url = state.id + "/" + assetField.url ?? "";
      } else {
        url = assetField.url;
      }
      return {
        add: assetField.add ?? false,
        avilaction: assetField.actions,
        url,
        formName: assetField.formName,
        fieldData: assetField.fieldData,
        fieldName: convertToArray(assetField.fieldName),
      };
    },
  },
  mutations: {
    [formField.mutations.fieldLoading](state, payload) {
      state.loading = payload.loading;
    },
    [formField.mutations.setFieldTab](state, payload) {
      console.log(payload);
      state.tab = payload.tab;
      state.id = payload.id ?? "";
      state.mainFieldName = payload.mainFieldName;
      state.error = null;
      state.loading = false;
      state.isActive = true;
    },
    [formField.mutations.fieldError](state, payload) {
      state.error = payload.error;
    },
    [formField.mutations.setFieldData](state, payload) {
      state.data = payload.data;
    },
  },
  actions: {
    [formField.actions.setFieldInitState]({ commit }, payload) {
      commit(formField.mutations.setFieldTab, payload);
    },
    async [formField.actions.fetchFieldData]({ commit, state }) {
      if (!state.isActive) return;
      console.log("Fetch Action Called");
      try {
        console.log("Fields ---->", this.getters.field);
        commit(formField.mutations.fieldLoading, { loading: true });
        commit(formField.mutations.fieldError, { error: null });
        const res = await getClient(`${this.getters.field.url}`);
        commit(formField.mutations.fieldLoading, { loading: false });
        const resData = res.data;
        console.log("Store Fetch", resData);
        const data = resData.map((el) => {
          let dataItem = JSON.parse(
            JSON.stringify(this.getters.field.fieldData)
          );
          for (let i in this.getters.field.fieldName) {
            const key = this.getters.field.fieldName[i];
            console.log(key);
            if (dataItem[key]) {
              if (dataItem[key].type === "date") {
                console.log("Date", el[key]);
              }
              if (Array.isArray(el[key])) {
                dataItem[key].display = false;
                let arrItems = [];
                el[key].map((item) => {
                  if (item.length !== null) {
                    arrItems.push(item);
                  }
                });
                dataItem[key].initialValue = arrItems;
              } else {
                dataItem[key].display = true;
                dataItem[key].initialValue = el[key];
              }
              if (key === networkDiscoveryFieldNames.ipRangeType) {
                dataItem[key].edit = false;
                if (el[key] === ipRangeOptions[0].id) {
                  dataItem[networkDiscoveryFieldNames.credentials].edit = false;
                } else
                  dataItem[networkDiscoveryFieldNames.credentials].edit = true;
              } else if (key != networkDiscoveryFieldNames.credentials) {
                dataItem[key].edit = true;
              }
              state.hideFields.map((el) => {
                console.log(el);
                if (key === el) {
                  dataItem[key].display = false;
                }
              });
              console.log("Data Item", dataItem[key]);
            }
          }
          const payload = {};
          Object.entries(el)
            .filter((el) => {
              const key = el[0];
              for (let i in this.getters.field.fieldName) {
                let key2 = this.getters.field.fieldName[i];
                if (key == key2) return false;
              }
              return true;
            })
            .map((el) => {
              payload[el[0]] = el[1];
            });
          console.log(payload);
          return {
            fieldData: dataItem,
            payload,
          };
        });
        console.log(data);
        commit(formField.mutations.setFieldData, { data });
      } catch (error) {
        console.log(error);
        commit(formField.mutations.fieldError, { error: Error(error) });
        commit(formField.mutations.fieldLoading, { loading: false });
      }
    },
    [formField.actions.destroy]({ state }) {
      state.isActive = false;
    },
  },
};
export default formFieldStore;

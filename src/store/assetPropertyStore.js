import { getClient } from "@/utils/client";
import { subFieldsName } from "@/utils/form/formName";
import { getAssetFileds } from "@/utils/helper";

const convertToArray = (obj) => {
  return Object.entries(obj).map((el) => el[1]);
};
const assetPropertyStore = {
  state: () => ({
    data: [],
    loading: false,
    error: null,
    tab: subFieldsName.hardwareProperties,
    id: "",
  }),
  getters: {
    field(state) {
      const assetField = getAssetFileds[state.tab];
      return {
        add: assetField.add ?? false,
        avilaction: assetField.actions,
        url: state.id + "/" + assetField.url ?? "",
        formName: assetField.formName,
        fieldData: assetField.fieldData,
        fieldName: convertToArray(assetField.fieldName),
      };
    },
  },
  mutations: {
    setAssetPropertyLoading(state, payload) {
      state.loading = payload.loading;
    },
    setAssetPropertyTab(state, payload) {
      state.tab = payload.tab;
      state.id = payload.id;
      state.error = null;
      state.loading = false;
    },
    setAssetPropertyError(state, payload) {
      state.error = payload.error;
    },
    setAssetPropertyData(state, payload) {
      state.data = payload.data;
    },
  },
  actions: {
    setAssetPropertyInitState({ commit }, payload) {
      commit("setAssetPropertyTab", payload);
    },
    async fetchAssetPropertyDetail({ commit }) {
      try {
        console.log("Fields ", this.getters.field);
        commit("setAssetPropertyLoading", { loading: true });
        commit("setAssetPropertyError", { error: null });
        const res = await getClient(`${this.getters.field.url}`);
        commit("setAssetPropertyLoading", { loading: false });
        const resData = res.data;
        console.log(resData);
        const data = resData.map((el) => {
          let dataItem = JSON.parse(
            JSON.stringify(this.getters.field.fieldData)
          );
          for (let i in this.getters.field.fieldName) {
            const key = this.getters.field.fieldName[i];
            console.log(key);
            dataItem[key].initialValue = el[key];
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
        commit("setAssetPropertyData", { data });
      } catch (error) {
        console.log(error);
        commit("setAssetPropertyError", { error: Error(error) });
        commit("setAssetPropertyLoading", { loading: false });
      }
    },
  },
};
export default assetPropertyStore;

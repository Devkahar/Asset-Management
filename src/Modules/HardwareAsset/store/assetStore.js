import { getClient } from "@/utils/http/client";
import { assetField, assetFieldName } from "@/utils/form/asset";
import { message } from "ant-design-vue/lib";
import { ROUTE } from "@/utils/constants";
import router from "@/router";

const assetStore = {
  state: () => ({
    assetItems: {},
    loading: false,
    error: null,
  }),
  getters: {
    assetItems(state) {
      return state.assetItems;
    },
  },
  mutations: {
    setLoading(state, payload) {
      state.loading = payload.loading;
    },
    setError(state, payload) {
      state.error = payload.error;
    },
    setAssetData(state, payload) {
      state.assetItems = payload.data;
    },
  },
  actions: {
    async fetchAssetDetail({ commit }, payload) {
      try {
        commit("setLoading", { loading: true });
        commit("setError", { error: null });
        const res = await getClient(`asset/${payload.id}`);
        console.log("Asset View Res", res);
        const resData = res.data;
        console.log(resData);

        commit("setLoading", { loading: false });
        let dataItem = JSON.parse(JSON.stringify(assetField));
        for (let key in assetFieldName) {
          dataItem[key].initialValue = resData[key];
        }
        commit("setAssetData", { data: dataItem });
        console.log(dataItem);
        // message.success("Resource Found");
      } catch (error) {
        console.log(error);
        commit("setError", { error: Error("Resource Does'nt Exist") });
        commit("setLoading", { loading: false });
        router.push({ name: ROUTE.HOME.name });
        message.error("Resource Not Found");
      }
    },
  },
};
export default assetStore;

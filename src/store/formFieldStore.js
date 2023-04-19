import { getClient } from "@/utils/client";
import { credentialFieldName } from "@/utils/form/credential";
import { subFieldsName } from "@/utils/form/formName";
import { networkDiscoveryFieldNames } from "@/utils/form/networkScan";
import {
  getFieldValuesFromApi,
  mainField,
  mainFieldName,
} from "@/utils/helper";
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
        const data = getFieldValuesFromApi(
          resData,
          this.getters.field.fieldData,
          this.getters.field.fieldName,
          state.hideFields
        );
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

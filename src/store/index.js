import Vue from "vue";
import Vuex from "vuex";
import formFieldStore from "./formFieldStore";
import assetStore from "../Modules/HardwareAsset/store/assetStore";
Vue.use(Vuex);
import userStore from "../Modules/Authentication/store/userStore";

export default new Vuex.Store({
  modules: {
    userState: userStore,
    assetState: assetStore,
    formFieldState: formFieldStore,
  },
});

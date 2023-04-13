import Vue from "vue";
import Vuex from "vuex";
import assetPropertyStore from "./assetPropertyStore";
import assetStore from "./assetStore";
Vue.use(Vuex);
import userStore from "./userStore";

export default new Vuex.Store({
  modules: {
    userState: userStore,
    assetState: assetStore,
    assetPropertyState: assetPropertyStore,
  },
});

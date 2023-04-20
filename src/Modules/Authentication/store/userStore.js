const userStore = {
  state: () => ({
    userInfo: JSON.parse(localStorage.getItem("userInfo"))
      ? JSON.parse(localStorage.getItem("userInfo"))
      : {},
  }),
  getters: {
    config: function (state) {
      if (state.userInfo?.token)
        return {
          headers: {
            Authorization: `Bearer ${state.userInfo?.token}`,
          },
        };
      else {
        return {};
      }
    },
    name: function (state) {
      return `${state.userInfo?.name}`;
    },
    email: function (state) {
      return `${state.userInfo?.email}`;
    },
    isUserAuth: function (state) {
      if (state.userInfo && state.userInfo?.token) return true;
      return false;
    },
  },
  mutations: {
    logout: function (state) {
      state.userInfo = {};
    },
    setDataFromLocal: function (state) {
      const userInfo = JSON.parse(localStorage.getItem("userInfo"));
      state.userInfo = userInfo ? userInfo : {};
    },
  },
  actions: {
    logout(context) {
      localStorage.clear();
      context.commit("logout");
    },
    login(context) {
      context.commit("setDataFromLocal");
    },
    signUp(context) {
      context.commit("setDataFromLocal");
    },
    updateUserInfo(context) {
      context.commit("setDataFromLocal");
    },
  },
};
export default userStore;

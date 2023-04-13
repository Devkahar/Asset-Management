const userStore = {
  state: () => ({
    userInfo: JSON.parse(localStorage.getItem("userInfo"))
      ? JSON.parse(localStorage.getItem("userInfo"))
      : {},
  }),
  getters: {
    config: function (state) {
      return {
        headers: {
          authorization: `Bearer ${state.userInfo.token}`,
        },
      };
    },
    user_id: function (state) {
      console.log(state.userInfo?._id);
      return `${state.userInfo?._id}`;
    },
    user_name: function (state) {
      return `${state.userInfo?.name}`;
    },
    isUserAuth: function (state) {
      if (state.userInfo && state.userInfo._id) return true;
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
    updateUserInfo(context) {
      context.commit("setDataFromLocal");
    },
  },
};
export default userStore;

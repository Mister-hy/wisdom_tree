import { login } from "../../api/user";
import { setItem, getItem } from "../../utils/storage";
export default {
  // 开启命名空间
  namespace: true,
  state: {
    token: getItem("token") || [],
  },
  mutations: {
    MU_TOKEN(state, token) {
      state.token = token;
      setItem("token", token);
    },
  },
  actions: {
    async setLogin({ commit }, params) {
      const token = await login(params);
      commit("MU_TOKEN", token);
      return token;
    },
  },
};

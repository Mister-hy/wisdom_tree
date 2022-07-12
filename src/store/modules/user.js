import { login } from "../../api/user";
import { setItem, getItem } from "../../utils/storage";
export default {
  // 开启命名空间
  namespace: true,
  state: {
    token: getItem("token") || [],
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
      setItem("token", token);
    },
  },
  actions: {
    async login({ commit }, loginForm) {
      const token = await login(loginForm);
      commit("setToken", token);
      return token;
    },
  },
};

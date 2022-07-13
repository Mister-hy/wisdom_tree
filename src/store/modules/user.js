import { login, getUserInfo, getPermissionList } from "../../api/user";
import { setItem, getItem } from "../../utils/storage";
export default {
  // 开启命名空间
  namespace: true,
  state: {
    token: getItem("token") || "",
    userInfo: "",
    routes: "",
    menus: "",
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
      setItem("token", token);
    },
    setUserInfo(state, userInfo) {
      state.userInfo = userInfo;
    },
    setPermission(state, permission) {
      state.permission = permission;
    },
    setMenus(state, menus) {
      state.menus = menus;
    },
  },
  actions: {
    async login({ commit }, loginForm) {
      const token = await login(loginForm);
      console.log("登录", token);
      commit("setToken", token);
      return token;
    },
    async getUserInfo({ commit }) {
      const userInfo = await getUserInfo();
      commit("setUserInfo", userInfo);
      return userInfo;
    },
    async getPermission({ commit }) {
      const { authoritys, menus } = await UserApi.getPermissionList();
      if (authoritys.length > 0 && menus.length > 0) {
        commit("setPermission", authoritys);
        commit("setMenus", menus);
        return { authoritys, menus };
      } else {
        return false;
      }
    },
  },
};

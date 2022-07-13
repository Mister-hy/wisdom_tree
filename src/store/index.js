import Vue from "vue";
import Vuex from "vuex";
import user from "./modules/user";
import getters from "./getters";
import menu from "./modules/menu";
import tags from "./modules/tags";
Vue.use(Vuex);

export default new Vuex.Store({
  getters,
  modules: {
    user,
    menu,
    tags,
  },
});

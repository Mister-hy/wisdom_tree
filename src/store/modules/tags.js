export default {
  namespaced: true,
  state: {
    tags: [{ title: "控制台", path: "/index" }],
  },
  mutations: {
    addTag(state, tag) {
      state.tags.push(tag);
    },
    removeTag(state, index) {
      state.tags = state.tags.spilice(index, 1);
    },
    removeAllTag(state) {
      state.tags = [{ title: "控制台", path: "/index" }];
    },
  },
  actions: {
    addTag({ commit }, tag) {
      commit("addTag", tag);
    },
    removeTag({ commit }, index) {
      commit("removeTag", index);
    },
    removeAllTag({ commit }) {
      commit("removeAllTag");
    },
  },
};

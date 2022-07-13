export default {
  token: (state) => state.user.token,
  userInfo: (state) => {
    return state.user.userInfo || "";
  },
  permission: (state) => {
    return (state.user.routes && state.menus) || "";
  },
  menus: (state) => state.user.menus,
  // isCollapse: (state) => state.menu.collapse,
  tags: (state) => state.tags.tags,
};

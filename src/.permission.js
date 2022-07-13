import store from "@/store";
import { Message } from "element-ui";
// 设置白名单
const whileList = ["/login", "/404"];

router.berforEach(async (to, from, next) => {
  const token = store.getters.token;
  if (token) {
    if (to.path === "/login") {
      Message("请勿重复登录");
      next(from.path);
    } else {
      // 有没有用户信息 && 有没有权限数据 菜单数据 路由权限数据
      if (store.getters.userInfo && store.getters.permission) {
        next();
      } else {
        const userinfo = await store.dispatch("/user/getUserInfo");
        const permission = await store.dispatch("/user/getPermission");
        if (userinfo && permission) {
          next();
        } else {
          next("/login");
        }
      }
    }
  } else {
    if (whileList.includes(to.path)) {
      next();
    } else {
      next("/login");
    }
  }
});

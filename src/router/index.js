import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "login",
    component: () => import("../views/login/index.vue"),
  },
  {
    path: "/",
    name: "layout",
    component: () => import("../layout/index.vue"),
    redirect: "/index",
    children: [
      {
        path: "/index",
        name: "index",
        component: () => import("../views/index/index.vue"),
        meta: {
          title: "控制台",
          icon: "el-icon-s-home",
        },
      },
      {
        path: "/404",
        name: "404",
        component: () => import("../views/404/index.vue"),
      },
      // { path: "*", redirect: "/404", hidden: true },
    ],
  },
  {
    path: "/sys",
    name: "sys",
    component: () => import("../layout"),
    meta: {
      title: "系统管理",
      icon: "el-icon-s-grid",
    },
    redirect: "/sys/users",
    children: [
      {
        path: "users",
        name: "users",
        component: () => import("../views/user/index.vue"),
        meta: {
          title: "用户管理",
          icon: "el-icon-user",
        },
      },
    ],
  },
  {
    path: "/sys",
    name: "sys",
    meta: {
      title: "系统管理",
      icon: "el-icon-s-grid",
    },
    component: () => import("../layout"),
    redirect: "/sys/users",
    children: [
      {
        path: "roles",
        name: "roles",
        component: () => import("../views/role/index.vue"),
        meta: {
          title: "角色管理",
          icon: "el-icon-user-solid",
        },
      },
    ],
  },
  {
    path: "/sys",
    name: "sys",
    meta: {
      title: "系统管理",
      icon: "el-icon-s-grid",
    },
    component: () => import("../layout"),
    redirect: "/sys/users",
    children: [
      {
        path: "menus",
        name: "menus",
        component: () => import("../views/menu/index.vue"),
        meta: {
          title: "菜单管理",
          icon: "el-icon-menu",
        },
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;

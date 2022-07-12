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
    redirect: "/profile",
    component: () => import("../layout"),
    children: [
      {
        path: "/profile",
        name: "profile",
        component: () => import("../views/profile/index.vue"),
      },
      {
        path: "/404",
        name: "404",
        component: () => import("../views/404/index.vue"),
      },
      { path: "*", redirect: "/404", hidden: true },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;

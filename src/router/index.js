import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/login/loginPage.vue"),
  },
  {
    path: "/",
    component: () => import("@/layout/index.vue"),
    redirect: "/article/manage",
    name: "首页",
    children: [
      {
        path: "/article/manage",
        name: "文章管理",
        component: () => import("@/views/article/ArticleManage.vue"),
      },
      {
        path: "/article/channel",
        name: "文章频道",
        component: () => import("@/views/article/ArticleChannel.vue"),
      },
      {
        path: "/user",
        redirect: "/user/profile",
        name: "个人中心",
        children: [
          {
            path: "/user/profile",
            name: "基本资料",
            component: () => import("@/views/user/UserProfile.vue"),
          },
          {
            path: "/user/avatar",
            name: "更换头像",
            component: () => import("@/views/user/UserAvatar.vue"),
          },
          {
            path: "/user/password",
            name: "重置密码",
            component: () => import("@/views/user/UserPassword.vue"),
          },
        ],
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;

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
    children: [
      {
        path: "/article/manage",
        component: () => import("@/views/article/ArticleManage.vue"),
      },
      {
        path: "/article/channel",
        component: () => import("@/views/article/ArticleChannel.vue"),
      },
      {
        path: "/user/profile",
        component: () => import("@/views/user/UserProfile.vue"),
      },
      {
        path: "/user/avatar",
        component: () => import("@/views/user/UserAvatar.vue"),
      },
      {
        path: "/user/password",
        component: () => import("@/views/user/UserPassword.vue"),
      },
      {
        path: "/user/profile",
        component: () => import("@/views/user/UserProfile.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;

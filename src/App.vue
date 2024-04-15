<script setup>
import { useCounterStore, useUserStore } from "@/store/modules";
import { useRouter } from "vue-router";
const counterStore = useCounterStore();
const router = useRouter();
function goHome() {
  router.push("/");
}
function goAbout() {
  router.push("/about");
}
const userStore = useUserStore();
const loginHandler = () => {
  userStore.setToken("zhishihihi");
};
const logoutHandler = () => {
  userStore.removeToken();
};

const addAgeHandler = () => {
  userStore.addAge();
};
</script>

<template>
  <div>我是app</div>
  <p>{{ counterStore.count }}</p>
  <el-button type="primary" @click="counterStore.increment">add</el-button>
  <el-button @click="goHome">跳首页</el-button>
  <el-button @click="goAbout">跳关于</el-button>
  <div>
    <h3>{{ userStore.token }} --- {{ userStore.useInfo.age }}</h3>
    <el-button type="primary" @click="loginHandler">登录</el-button>
    <el-button type="primary" @click="logoutHandler">退出</el-button>
    <el-button type="primary" @click="addAgeHandler">addAge</el-button>
  </div>
  <router-view />
</template>

<style scoped>
</style>

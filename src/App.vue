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
  <router-view />
</template>

<style scoped>
</style>

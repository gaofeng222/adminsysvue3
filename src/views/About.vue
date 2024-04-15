<template>
  <div>about</div>
  <p>{{ counterStore.count }}</p>
  <el-input v-model="input" placeholder="请输入内容"></el-input>
</template>

<script setup>
import { ref } from "vue";
import { useCounterStore } from "@/store/modules/counter";
const counterStore = useCounterStore();
const input = ref("");
</script>
<style lang="scss" scoped>
</style>

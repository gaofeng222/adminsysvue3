<template>
  <el-breadcrumb separator=">">
    <el-breadcrumb-item v-for="menu in breadMenus" :to="{ path: menu.path }">{{ menu.name}}</el-breadcrumb-item>
  </el-breadcrumb>
</template>
<script setup>
defineProps(["breadMenus"]);
</script>
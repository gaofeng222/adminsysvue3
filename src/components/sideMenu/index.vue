<template>
  <el-menu
    active-text-color="#ffd04b"
    background-color="#232323"
    class="el-menu-vertical-demo"
    :default-active="$route.path"
    text-color="#fff"
    router
    :collapse="isCollapsed"
  >
    <el-menu-item index="/article/channel">
      <el-icon>
        <i-ep-menu />
      </el-icon>
      <span>文章分类</span>
    </el-menu-item>
    <el-menu-item index="/article/manage">
      <el-icon>
        <i-ep-document />
      </el-icon>
      <span>文章管理</span>
    </el-menu-item>
    <el-sub-menu index="/user">
      <template #title>
        <el-icon>
          <i-ep-user-filled />
        </el-icon>
        <span>个人中心</span>
      </template>
      <el-menu-item index="/user/profile">
        <el-icon>
          <i-ep-user />
        </el-icon>
        <span>基本资料</span>
      </el-menu-item>
      <el-menu-item index="/user/avatar">
        <el-icon>
          <i-ep-avatar />
        </el-icon>
        <span>更换头像</span>
      </el-menu-item>
      <el-menu-item index="/user/password">
        <el-icon>
          <i-ep-edit />
        </el-icon>
        <span>重置密码</span>
      </el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script setup>
import { routes } from "@/router";
import { useSettingStore } from "@/store/modules";
const settingStore = useSettingStore();
const isCollapsed = computed(() => settingStore.isCollapse);
</script>

<style lang="scss"></style>
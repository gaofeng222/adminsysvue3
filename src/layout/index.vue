<template>
  <el-container>
    <el-aside :width="!isCollapsed ? '200px':'60px'">
      <div class="el-aside__logo" v-if="!isCollapsed"></div>
      <div v-else class="top-logo">
        <el-icon color="greenyellow" :size="38">
          <i-ep-Shop />
        </el-icon>
      </div>
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
    </el-aside>
    <el-container>
      <el-header>
        <div class="left-p">
          <el-icon @click="toggleSideBar">
            <i-ep-Expand v-if="isCollapsed" />
            <i-ep-Fold v-else />
          </el-icon>
        </div>
        <div class="right-a">
          <el-avatar :size="50" :src="avatarUrl" />
          <el-dropdown @command="handleCommand">
            <span class="el-dropdown-link">
              欢迎回来,{{ username }}
              <el-icon class="el-icon--right">
                <i-ep-arrow-down />
              </el-icon>
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item :icon="Plus">Action 1</el-dropdown-item>
                <el-dropdown-item :icon="CirclePlusFilled">Action 2</el-dropdown-item>
                <el-dropdown-item command="logout">
                  <el-icon>
                    <i-ep-switch-button />
                  </el-icon>退出
                </el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </el-header>
      <el-main>
        <el-card class="page-container">
          <router-view v-slot="{ Component, route }">
            <transition appear name="fade" mode="out-in">
              <component :is="Component" :key="route.path" />
            </transition>
          </router-view>
        </el-card>
      </el-main>
      <el-footer>高峰的后台管理系统V3 ©2024 Created by gaofeng222</el-footer>
    </el-container>
  </el-container>
</template>
<script setup>
import { useSettingStore, useUserStore } from "@/store/modules";
const settingStore = useSettingStore();
const userStore = useUserStore();
const router = useRouter();
const toggleSideBar = () => {
  settingStore.toggleCollapse();
};

const isCollapsed = computed(() => settingStore.isCollapse);
const avatarUrl =
  "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png";

const handleCommand = type => {
  if (type === "logout") {
    userStore.removeToken();
    router.replace("/login");
  }
};
const username = computed(() => userStore.useInfo.username);
</script>
<style lang="scss" scoped>
.el-aside__logo {
  height: 80px;
  background: url("@/assets/images/logo-d1.png") no-repeat center/120px auto;
}
.el-container {
  .el-aside {
    background: #232323;
    transition: width 0.3s ease-in-out;
    overflow: hidden;
    .el-menu {
      border-right: none;
    }
    .top-logo {
      text-align: center;
      margin-top: 20px;
    }
  }
  .el-header {
    height: 60px;
    background: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .left-p,
    .right-a {
      height: 100%;
      display: flex;
      align-items: center;
      .el-icon {
        cursor: pointer;
        padding: 10px;
      }
    }
  }
  .el-main {
    .page-container {
      min-height: 100%;
      box-sizing: border-box;
    }
  }
  .el-footer {
    text-align: center;
  }
}
</style>

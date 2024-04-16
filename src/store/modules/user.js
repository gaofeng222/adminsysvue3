import { defineStore } from "pinia";
import { ref } from "vue";
import { getUserInfo } from "@/api";
export const useUserStore = defineStore(
  "user",
  () => {
    const token = ref("");
    const useInfo = ref(null);
    const setToken = (value) => {
      token.value = value;
    };
    const removeToken = () => {
      token.value = "";
      useInfo.value = null;
    };

    const getUserInfoDetail = async () => {
      const res = await getUserInfo();
      useInfo.value = res.data.data;
    };
    return { token, useInfo, setToken, removeToken, getUserInfoDetail };
  },
  {
    persist: true,
  }
);

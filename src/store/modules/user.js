import { defineStore } from "pinia";
import { ref } from "vue";
export const useUserStore = defineStore(
  "user",
  () => {
    const token = ref("");
    const useInfo = ref({
      name: "zs",
      age: 20,
    });
    const setToken = (value) => {
      token.value = value;
    };
    const removeToken = () => {
      token.value = "";
    };
    const addAge = () => {
      useInfo.value.age++;
    };
    return { token, useInfo, setToken, removeToken, addAge };
  },
  {
    persist: true,
  }
);

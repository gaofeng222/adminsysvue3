import { defineStore } from "pinia";
export const useSettingStore = defineStore(
  "setting",
  () => {
    const isCollapse = ref(false);
    const toggleCollapse = (value) => {
      isCollapse.value = !isCollapse.value;
    };

    return { isCollapse, toggleCollapse };
  },
  {
    persist: true,
  }
);

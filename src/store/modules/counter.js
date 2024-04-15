import { defineStore } from "pinia";
import { ref, computed } from "vue";
// export const useCounterStore = defineStore("counter", {
//   // 为了完整类型推理，推荐使用箭头函数
//   state: () => {
//     return {
//       // 所有这些属性都将自动推断出它们的类型
//       count: 0,
//     };
//   },
// });

export const useCounterStore = defineStore("counter", () => {
  const count = ref(0);
  const doubleCount = computed(() => count.value * 2);
  function increment() {
    count.value++;
  }
  return { count, doubleCount, increment };
});

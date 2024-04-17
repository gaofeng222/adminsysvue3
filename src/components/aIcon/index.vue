<template>
  <i :class="iconClass" :style="iconStyle"></i>
</template>
 
<script>
import { defineComponent, computed } from "vue";

export default defineComponent({
  name: "Icon",
  props: {
    name: {
      type: String,
      required: true
    },
    size: {
      type: [Number, String],
      default: 16
    },
    color: {
      type: String,
      default: ""
    },
    iconStyle: {
      type: Object,
      default: {}
    }
  },
  setup(props) {
    const iconClass = computed(() => {
      return `el-icon-${props.name}`;
    });
    return { iconClass, iconStyle: props.iconStyle };
  }
});
</script>

<style scoped>
/* 可以在这里自定义图标的样式 */
.icon {
  width: 1em;
  height: 1em;
  display: inline-block;
}
</style>
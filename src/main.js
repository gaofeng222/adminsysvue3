import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "@/router";
import pinia from "@/store";
import "./router/persmisson";
// import ElementPlus from "element-plus";
// import "element-plus/dist/index.css";
import AIcon from "@/components/aIcon/index.vue";
const app = createApp(App);
app.use(router);
app.use(pinia);
app.component("AIcon", AIcon);
// app.use(ElementPlus, {
//   size: "medium",
//   zIndex: 3000,
// });
app.mount("#app");

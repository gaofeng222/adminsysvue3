import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "@/router";
import pinia from "@/store";

// import ElementPlus from "element-plus";
// import "element-plus/dist/index.css";

const app = createApp(App);
app.use(router);
app.use(pinia);
// app.use(ElementPlus, {
//   size: "medium",
//   zIndex: 3000,
// });
app.mount("#app");

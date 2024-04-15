import router from "./index";
import { useUserStore } from "@/store/modules";
router.beforeEach((to, from, next) => {
  const { token } = useUserStore();
  if (!token) {
    if (to.path != "/login") {
      next("/login");
    } else {
      next();
    }
  } else {
    if (to.path == "/login") {
      next("/");
    } else {
      next();
    }
  }
});

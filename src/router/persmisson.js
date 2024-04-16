import router from "./index";
import { useUserStore } from "@/store/modules";
router.beforeEach(async (to, from, next) => {
  const { token, getUserInfoDetail, useInfo } = useUserStore();
  // if (!token) {
  //   if (to.path != "/login") {
  //     next("/login");
  //   } else {
  //     next();
  //   }
  // } else {
  //   if (to.path == "/login") {
  //     next("/");
  //   } else {
  //     next();
  //   }
  // }
  //如果存在token，则说明已经登录了，如果useInfo为null这时候我们就获取用户信息
  if (token && !useInfo) {
    await getUserInfoDetail();
  }
  if (!token && to.path != "/login") {
    return next("/login");
  } else if (token && to.path == "/login") {
    return next("/");
  }
  next();
});

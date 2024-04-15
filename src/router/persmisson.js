import router from './index'
import { useUserStore } from '@/store/modules'
router.beforeEach((to, from, next) => {
  const { token } = useUserStore()
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
  if (!token && to.path != '/login') {
    return next('/login')
  } else if (token && to.path == '/login') {
    return next('/')
  }
  next()
})

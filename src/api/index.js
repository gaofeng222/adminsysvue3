import request from "../utils/require.js";

export const userRegister = ({ username, password, repassword }) => {
  return request.post("/api/reg", { username, password, repassword });
};
export const userLogin = ({ username, password }) => {
  return request.post("/api/login", { username, password });
};

/**
 * 获取用户信息
 */
export const getUserInfo = () => {
  return request.get("/my/userinfo");
};

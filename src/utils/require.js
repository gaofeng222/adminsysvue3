import axios from "axios";
import { useUserStore } from "@/store/modules";
import { ElMessage } from "element-plus";
import router from '@/router'
// 创建一个 Axios 实例
const instance = axios.create({
  // 设置基础 URL，用于所有请求的前缀
  // baseURL: "http://localhost:4444",
  baseURL:'http://big-event-vue-api-t.itheima.net/',
  // 设置超时时间，单位为毫秒
  timeout: 5000,
});

// 添加请求拦截器
instance.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    return config;
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 添加响应拦截器
instance.interceptors.response.use(
  function (response) {
    const userStore = useUserStore()
    const token = userStore.token;
    if (token) {
      config.headers.Authorization = `${token}`;
    }
    // 对响应数据做点什么
    if(response.data.code === 0){
      return response;
    }

    //处理业务失败,给出错误提示，抛出错误
    ElMessage.error(response.data.message || '服务异常')    
    return Promise.reject(response.data);
  },
  function (error) {
    // 对响应错误做点什么

    // 获取错误状态码
    const status = error.response.status;

    // 根据状态码进行相应处理
    let message = ''
    switch (status) {
      case 400:
        // Bad Request
        message ='Bad Request';
        break;
      case 401:
        // Unauthorized
        message ='Unauthorized';
        router.push('/login')
        break;
      case 403:
        // Forbidden
        message ='Forbidden';
        break;
      case 404:
        // Not Found
        message ='Not Found';
        break;
      case 500:
        // Internal Server Error
        message ='Internal Server Error';
        break;
      default:
        // 其他错误
        message ='Other Error';
    ElMessage.error(message)    
    return Promise.reject(error);
  }
);

export default instance;

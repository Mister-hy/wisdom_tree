import axios from "axios";

const http = axios.create({
  baseURL: "",
  timeout: 1000,
});

//axios设置请求拦截器
http.interceptors.request.use(
  (config) => {
    return config;
  },
  (err) => {
    console.log(err);
  }
);
//axios设置响应拦截器
http.interceptors.response.use(
  (response) => {
    return response.data; //拦截处理响应结果，直接返回需要的数据
  },
  (err) => {
    console.log(err);
  }
);

export default http;

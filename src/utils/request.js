import axios from "axios";
import { getItem } from "./storage";
import { Message } from "element-ui";
const http = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  timeout: 10000,
});

//axios设置请求拦截器
http.interceptors.request.use(
  (config) => {
    const token = getItem("token");
    if (token) {
      config.headers.token = token;
    }
    return config;
  },
  (err) => {
    console.log(err);
  }
);
//axios设置响应拦截器
http.interceptors.response.use(
  (response) => {
    const {
      data: { data, msg, code },
    } = response;
    if (code == 200) {
      return data;
    } else {
      return Message.error(msg);
    }
  },
  (error) => {
    // console.log(err);
    return Promise.reject(error)
  }
);

export default http;

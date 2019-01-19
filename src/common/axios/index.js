
import axios from 'axios'
import {store} from '@/store/index'


console.log(store.getState().app.baseUrl)


const service = axios.create({
  baseURL: store.getState().app.baseUrl,
  timeout: 30000, // request timeout 30s
  //responseType: JSON, // 返回数据类型定义为json
  //withCredentials: true // 使前台能够保存cookie
})


// request 拦截器
service.interceptors.request.use(function (config) {
  config.headers['Content-type'] = 'application/x-www-form-urlencoded;application/json;charset=UTF-8';
  // let token;
  // if (localStorage.getItem('loginToken')) {
  //   token = localStorage.getItem('loginToken');
  // }
  // if (token) {
  //   config.headers['token'] = token;
  // }
  return config;
}, function (err) {
  return Promise.reject(err);
});

// response 拦截器
service.interceptors.response.use(
  response => {
      return response;
  },
  error => {
    return Promise.reject(error.response.data)   // 返回接口返回的错误信息
  });

export default service;

import axios from 'axios'

export function request(config) {
  const instance = axios.create({
    baseURL: '',
    timeout: 5000
  })

  /* // instance 请求拦截
  instance.interceptors.request.use(config => {
    return config
  },err => {}); */

  // instance 响应拦截
  instance.interceptors.response.use(config => {
    return config.data
  }, err => {console.log(err)});
  return instance(config);
}

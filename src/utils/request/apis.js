import * as axios from './request'

export default {
  // 登录
  login: (data, config) => axios.get('login.json', data, config),
  // 注册
  register: (data, config) => axios.get('register.json', data, config),
  // 首页
  home: (data, config) => axios.get('home.json', data, config),
  // 推荐作者
  authorList: (data, config) => axios.get('authorList.json', data, config),
  // 首页
  rr: (data, config) => axios.get('home.json', data, config)
};
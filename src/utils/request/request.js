import axios from './interceptors'
import store from '@/store'
import loading from '../loading'

let basicUrl = '';
if (process.env.NODE_ENV === 'development') {
  basicUrl = '/api/'
} else if (process.env.NODE_ENV === 'production') {
  basicUrl = '/api/'
}

const header = { 'Content-Type': 'application/x-www-form-urlencoded' };

export const get = (url, params, config = {}) => {
  loading.show();
  if (store.getState().toJS().basic.login) header.token = localStorage.getItem('token');
  return new Promise((resolve, reject) => {
    axios({
      method: 'get',
      url: basicUrl + url,
      header,
      params,
      timeout: '10000',
      config
    }).then((data) => {
      setTimeout(() => { // 模拟接口请求延时
        loading.close();
        resolve(data)
      }, 1500)
    }).catch(error => {
      reject(error)
    })
  })
};

export const post = (url, data, config = {}) => {
  return new Promise((resolve, reject) => {
    axios({
      method: 'post',
      url: basicUrl + url,
      header,
      data,
      timeout: '10000',
      config
    }).then((data) => {
      setTimeout(() => { // 模拟接口请求延时
        loading.close();
        resolve(data)
      }, 1500)
    }).catch(error => {
      reject(error)
    })
  });
};
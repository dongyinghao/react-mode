import axios from './interceptors'
import store from '@/store'

let basicUrl = '';
if (process.env.NODE_ENV === 'development') {
  basicUrl = '/api/'
} else if (process.env.NODE_ENV === 'production') {
  basicUrl = '/api/'
}

const header = { 'Content-Type': 'application/x-www-form-urlencoded' };

export const get = (url, params, config = {}) => {
  if (store.getState().toJS().basic.login) header.token = localStorage.getItem('token');
  return axios({
    method: 'get',
    url: basicUrl + url,
    header,
    params,
    timeout: '10000',
    config
  })
};

export const post = (url, data, config = {}) => {
  return axios({
    method: 'post',
    url: basicUrl + url,
    header,
    data,
    timeout: '10000',
    config
  })
};
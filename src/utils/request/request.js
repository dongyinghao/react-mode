import axios from './interceptors'

const basicUrl = '/api/';

const header = {};

export const get = (url, params, config = {}) => {
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
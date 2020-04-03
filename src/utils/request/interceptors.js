import axios from 'axios'

axios.interceptors.request.use(function (option) {
  delete option.config;
  return option
}, function (error) {
  return Promise.reject(error)
});

axios.interceptors.response.use(function (response) {
  return response.data
}, function (error) {
  if (error.response) {
  } else {
    if (error.code === 'ECONNABORTED' && error.message.indexOf('timeout') !== -1) {
      console.log('请求超时')
    }
  }
  return Promise.reject(error)
});

export default axios

const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    createProxyMiddleware('/apiProxy', {
      target: 'http://172.31.40.93:9443', // 转发地址
      secure: false, // 是否正式校验 https，http
      changeOrigin: true, // 是否允许跨域
      pathRewrite: { // 重写接口
        "^/apiProxy": "/"
      }
    })
  )
};
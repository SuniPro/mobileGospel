const {createProxyMiddleware} = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/api', {
      target: 'http://localhost:8080', //접속하려는 서버의 루트 URL
      //   target: 'http://54.64.93.14:6010/', //접속하려는 서버의 루트 URL
      changeOrigin: true,
    })
  );
};
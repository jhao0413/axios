module.exports = {
    devServer: {
      proxy: {
        '/api': {
          target: 'https://u.y.qq.com', //对应自己的接口
          changeOrigin: true, //跨域为true
          ws: true,
          pathRewrite: {
            '^/api': ''//自定义地址名
          }
        }
      }
    }
  }
module.exports = {
    devServer: {
      proxy: {
        '/api': {
          target: 'https://u.y.qq.com', //对应自己的接口
          changeOrigin: true,
          ws: true,
          pathRewrite: {
            '^/api': ''
          }
        }
      }
    }
  }
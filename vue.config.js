export const devServer = {
  proxy: {
    '/api': {
      target: 'https://u.y.qq.com',
      changeOrigin: true,
      ws: true,
      pathRewrite: {
        '^/api': '' //自定义地址名
      }
    }
  }
};
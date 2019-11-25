const path = require('path')
// const fs = require('fs')

module.exports = {
  webpack(config, env) {
    // eslint-disable-next-line no-param-reassign
    config.resolve = {
      alias: {
        '@': path.resolve(__dirname, 'src'),
        component: path.resolve(__dirname, 'src/component'),
      },
    }
    return config
  },
  devServer(configFunction) {
    const baseUrl = process.env.REACT_APP_BASE_API
    return (proxy, allowedHost, port) => {
      const config = configFunction(proxy, allowedHost, port)
      config.proxy = {
        [baseUrl]: {
          target: `http://127.0.0.1:${process.env.PORT}/mock`,
          changeOrigin: true,
          pathRewrite: {
            [`^${baseUrl}`]: '',
          },
        },
      }
      config.after = require('./mock/mock-server.js')
      return config
    }
  },
}

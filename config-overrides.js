const path = require('path')
// const fs = require('fs')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  webpack(config, env) {
    // eslint-disable-next-line no-param-reassign
    config.resolve = {
      alias: {
        '@': resolve('src'),
        component: resolve('src/component'),
      },
    }
    return config
  },
  devServer(configFunction) {
    const baseUrl = process.env.REACT_APP_BASE_API
    return (proxy, allowedHost) => {
      const config = configFunction(proxy, allowedHost)
      config.proxy = {
        [baseUrl]: {
          target: `http://127.0.0.1:${process.env.PORT}/mock`,
          changeOrigin: true,
          pathRewrite: {
            [`^${baseUrl}`]: '',
          },
        },
      }
      config.after = require('./mock/mock-server')
      return config
    }
  },
}

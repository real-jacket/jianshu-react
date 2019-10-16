const path = require('path')

module.exports = function override(config, env) {
  // eslint-disable-next-line no-param-reassign
  config.resolve = {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      component: path.resolve(__dirname, 'src/component'),
    },
  }
  return config
}

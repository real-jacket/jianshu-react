const chokidar = require('chokidar')
const bodyParser = require('body-parser')
const chalk = require('chalk')
const path = require('path')

const mockDir = path.join(process.cwd(), 'mock')

function registerRoutes(app) {
  let mockLastIndex
  const mocks = require('./mock.js')
  // eslint-disable-next-line no-restricted-syntax
  for (const mock of mocks) {
    app[mock.type](mock.url, mock.response)
    // eslint-disable-next-line no-underscore-dangle
    mockLastIndex = app._router.stack.length
  }
  const mockRoutesLength = Object.keys(mocks).length
  return {
    mockRoutesLength,
    mockStartIndex: mockLastIndex - mockRoutesLength,
  }
}

function unregisterRoutes() {
  Object.keys(require.cache).forEach(i => {
    if (i.includes(mockDir)) {
      delete require.cache[require.resolve(i)]
    }
  })
}

module.exports = app => {
  // es6 polyfill
  // eslint-disable-next-line import/no-extraneous-dependencies
  require('@babel/register')

  // parse app.body
  // https://expressjs.com/en/4x/api.html#req.body
  app.use(bodyParser.json())
  app.use(
    bodyParser.urlencoded({
      extended: true,
    }),
  )

  const mockRoutes = registerRoutes(app)
  let mockRoutesLength = mockRoutes.mockRoutesLength
  let mockStartIndex = mockRoutes.mockStartIndex

  // watch files, hot reload mock server
  chokidar
    .watch(mockDir, {
      ignored: /mock-server/,
      ignoreInitial: true,
    })
    .on('all', (event, _path) => {
      if (event === 'change' || event === 'add') {
        try {
          // remove mock routes stack
          // eslint-disable-next-line no-underscore-dangle
          app._router.stack.splice(mockStartIndex, mockRoutesLength)

          // clear routes cache
          unregisterRoutes()

          // eslint-disable-next-line no-shadow
          const mockRoutes = registerRoutes(app)
          mockRoutesLength = mockRoutes.mockRoutesLength
          mockStartIndex = mockRoutes.mockStartIndex

          console.log(
            chalk.magentaBright(
              `\n > Mock Server hot reload success! changed  ${_path}`,
            ),
          )
        } catch (error) {
          console.log(chalk.redBright(error))
        }
      }
    })
}

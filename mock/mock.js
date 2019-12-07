const Mock = require('mockjs')
const article = require('./article')


// import user from './user'
// import role from './role'
// import search from './remote-search'

const mocks = [
  // ...user,
  // ...role,
  ...article,
  // ...search
]

const responseFake = (url, type, respond) => ({
  url: new RegExp(`/mock${url}`),
  type: type || 'get',
  response(req, res) {
    res.json(Mock.mock(respond instanceof Function ? respond(req, res) : respond))
  },
})

module.exports = mocks.map((route) => responseFake(route.url, route.type, route.response))

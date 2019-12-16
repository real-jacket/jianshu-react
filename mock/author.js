const Mock = require('mockjs')

const List = []
const count = 5

// eslint-disable-next-line no-plusplus
for (let i = 0; i < count; i++) {
  List.push(Mock.mock({
    id: '@increment',
    avatar: '@integer(1, 5)',
    timestamp: +Mock.Random.date('T'),
    author: '@cname',
    write: '@float(100, 500, 1,1)',
    like: '@float(1, 10, 1,1)',
  }))
}

module.exports = [
  {
    url: '/author/list',
    type: 'get',
    response: () => ({
      code: 20000,
      data: {
        total: List.length,
        items: List,
      },
      message: '成功',
    }),
  },
]

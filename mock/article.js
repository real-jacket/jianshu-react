const Mock = require('mockjs')

const List = []
const count = 10

// eslint-disable-next-line no-plusplus
for (let i = 0; i < count; i++) {
  List.push(Mock.mock({
    id: '@increment',
    timestamp: +Mock.Random.date('T'),
    author: '@cname',
    title: '@ctitle',
    content_short: '@cparagraph',
    // image_uri: `/pic/article/${Mock.Random.natural(1, 10)}.jpg`,
    image_uri() {
      const n = Mock.Random.natural(1, 10)
      return [2, 8, 9, 10].includes(n) ? '' : `/pic/article/${n}.jpg`
    },
    integrate: '@float(0, 100, 1, 1)',
    comment_num: '@integer(1,500)',
    like_point: '@integer(1,100)',
  }))
}

module.exports = [
  {
    url: '/article/list',
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

import Mock from 'mockjs'

const List = []
const count = 10

// eslint-disable-next-line no-plusplus
for (let i = 0; i < count; i++) {
  List.push(Mock.mock({
    id: '@increment',
    timestamp: +Mock.Random.date('T'),
    author: '@first',
    title: '@title(5,10)',
    content_short: 'mock data',
    image_uri: '',
    integrate: '@number(1,100)',
    comment_num: '@number(1,500)',
    like_point: '@number(1,100)',
  }))
}

export default [
  {
    url: '/artical/list',
    type: 'get',
    response: () => ({
      code: 2000,
      data: {
        total: List.length,
        items: List,
      },
      message: '成功',
    }),
  },
]

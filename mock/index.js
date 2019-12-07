import Mock from 'mockjs'
import { param2Obj } from '../src/utils'

// import user from './user'
// import role from './role'
import article from './article'
// import search from './remote-search'

const mocks = [
  // ...user,
  // ...role,
  ...article,
  // ...search
]

// for front mock
// please use it cautiously, it will redefine XMLHttpRequest,
// which will cause many of your third-party libraries to be invalidated(like progress event).
export default function mockXHR() {
  // mock patch
  // https://github.com/nuysoft/Mock/issues/300
  Mock.XHR.prototype.proxy_send = Mock.XHR.prototype.send
  // eslint-disable-next-line func-names
  Mock.XHR.prototype.send = function () {
    if (this.custom.xhr) {
      this.custom.xhr.withCredentials = this.withCredentials || false

      if (this.responseType) {
        this.custom.xhr.responseType = this.responseType
      }
    }
    // eslint-disable-next-line prefer-rest-params
    this.proxy_send(...arguments)
  }

  function XHR2ExpressReqWrap(respond) {
    return (options) => {
      let result = null
      if (respond instanceof Function) {
        const { body, type, url } = options
        // https://expressjs.com/en/4x/api.html#req
        result = respond({
          method: type,
          body: JSON.parse(body),
          query: param2Obj(url),
        })
      } else {
        result = respond
      }
      return Mock.mock(result)
    }
  }

  mocks.forEach((i) => {
    Mock.mock(new RegExp(i.url), i.type || 'get', XHR2ExpressReqWrap(i.response))
  })
}

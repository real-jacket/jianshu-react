import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import mockXHR from '../mock'

if (process.env.NODE_ENV === 'production') {
  mockXHR()
}

ReactDOM.render(<App />, document.getElementById('root'))

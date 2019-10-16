import React from 'react'
import { Provider } from 'react-redux'
import Header from 'component/header'
import GlobalStyle from '@/style'
import store from '@/store'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <GlobalStyle />
        <Header />
      </div>
    </Provider>
  )
}

export default App

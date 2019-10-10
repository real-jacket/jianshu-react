import React from 'react'
import { Provider } from 'react-redux'
import GlobalStyle from './style'
import Header from './component/header'
import store from './store'

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

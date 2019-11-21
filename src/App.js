import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom'
import { Provider } from 'react-redux'
import Header from 'component/header'
import GlobalStyle from '@/style'
import store from '@/store'
import router from '@/router'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <GlobalStyle />
        <Router>
          <Switch>
            <Header />
            {router}
          </Switch>
        </Router>
      </div>
    </Provider>
  )
}

export default App

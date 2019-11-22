import React from 'react'
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'
import { Provider } from 'react-redux'
import GlobalStyle from '@/style'
import store from '@/store'
import NotFound from '@/pages/error/not-found'
import Login from '@/pages/login'
import Layout from '@/pages/layout'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <GlobalStyle />
        <Router basename="/">
          <Switch>
            <Route path="/404" exact component={NotFound} />
            <Route exact path="/">
              <Redirect to="/app" />
            </Route>
            <Route path="/app" component={Layout} />
            <Route path="/login" exact component={Login} />
            <Route path="*" exact component={NotFound} />
          </Switch>
        </Router>
      </div>
    </Provider>
  )
}

export default App

import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '@/pages/home'
import Write from '@/pages/write'

export default (
  <Switch>
    <Route path="/app" exact component={Home} />
    <Route path="/app/write" exact component={Write} />
  </Switch>
)

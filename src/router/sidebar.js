import React from 'react'
import { Route, Switch } from 'react-router-dom'
import HomeSidebar from '@/pages/home/sidebar'
import WriteSidebar from '@/pages/write/sidebar'

export default (
  <Switch>
    <Route path="/app" exact component={HomeSidebar} />
    <Route path="/app/write" exact component={WriteSidebar} />
  </Switch>
)

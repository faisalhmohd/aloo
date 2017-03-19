import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import App from './components/app'
import Home from './components/home'
import NotFound from './components/notfound'

export default function () {
  return (
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={Home} />
        <Route path='*' component={NotFound} />
      </Route>
    </Router>
  )
}

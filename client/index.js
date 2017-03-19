// React + Redux Requirements
import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { browserHistory } from 'react-router'

// Routes
import Routes from './routes'

// Reducers
import reducers from './reducers'

// Grab initial state
const preloadedState = window.__REDUX_STATE__

// Allow the passed state to be garbage-collected
delete window.__REDUX_STATE__

// Create Redux store with initial state
const store = createStore(reducers, preloadedState, applyMiddleware())

render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('root')
)

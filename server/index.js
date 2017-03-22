// React Requirements
import React from 'react'
import { match, RouterContext } from 'react-router'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import {renderToString} from 'react-dom/server'
import reducers from '../client/reducers'
import routes from '../client/routes'

const handleRender = (req, res) => {
  match({ routes: routes(), location: req.url }, (err, redirectLocation, renderProps) => {
    if (err) return next(err)

    if (redirectLocation) {
      return res.redirect(302, redirectLocation.pathname + redirectLocation.search)
    }

    if (!renderProps) {
      return next(new Error('Missing render props'))
    }

    const components = renderProps.components

    // If the component being shown is our 404 component, then set appropriate status
    if (components.some((c) => c && c.displayName === 'error-404')) {
      res.status(404)
    }

    const Comp = components[components.length - 1].WrappedComponent
    const fetchData = (Comp && Comp.fetchData) || (() => Promise.resolve())

    const initialState = {}
    const store = createStore(reducers, initialState, applyMiddleware())
    const { location, params, history } = renderProps

    fetchData({ store, location, params, history })
      .then(() => {
        const body = renderToString(
          <Provider store={store}>
            <RouterContext {...renderProps} />
          </Provider>
        )
        const state = store.getState()
        res.render('index', {body, state})
      })
      .catch((err) => next(err))
  })
}

module.exports = {
  handleRender
}

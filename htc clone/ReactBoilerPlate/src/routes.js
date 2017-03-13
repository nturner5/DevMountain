import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './components/app'
import Home from './components/home/home'
import Products from './components/products/products'

export default(
    <Route path='/' component={App}>
        <IndexRoute component={ Home } />

        <Route path='/products' component={ Products } />
    </Route>
)
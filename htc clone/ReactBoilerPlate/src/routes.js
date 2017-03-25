import React from 'react'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

import App from './components/app'
import Home from './components/home/home'
import Products from './components/products/products'
import PhoneList from './components/products/phones/phone_list'
import AccessoriesList from './components/products/accessories/accessories_list'
import Register from './components/register/register'
import Login from './components/login/login'

export default(
        <Route path='/' component={App}>
            <IndexRoute component={ Home } />
            <Route path='register' component={ Register } />
            <Route path='login' component={ Login } />
            <Route path='products' component={ Products }>
                <IndexRoute component={ PhoneList } />
                <Route path='phones' component={ PhoneList }/>
                <Route path='accessories' component={ AccessoriesList }/>
            </Route>
            
        </Route>
)
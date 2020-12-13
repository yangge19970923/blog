import React from "react"
import ReactDOM from 'react-dom'
import {BrowserRouter, Route, Switch} from "react-router-dom"

import 'lib-flexible'

import './assets/css/index.less'

import App from './app'
import Login from "./pages/login"
import Edit from "./pages/edit"

ReactDOM.render( 
    <BrowserRouter>
        <Switch>
            <Route path="/login" component={Login}></Route>
            <Route path="/edit" component={Edit}></Route>
            <App></App>
        </Switch>
    </BrowserRouter>
, document.getElementById('root'));
import React, {Component} from "react"
import {BrowserRouter, Route, Switch} from "react-router-dom"
import LeftNav from './components/left-nav'
import Home from './pages/home'

import { Redirect } from "react-router-dom/cjs/react-router-dom.min"
import Classification from "./pages/classification"
import Detail from "./pages/detail"

export default class App extends Component {
    render () {
        return (
            <div className="app">
                <LeftNav />
                <BrowserRouter>
                    <Switch>
                        <Route path="/home" component={Home}></Route>
                        <Route path="/classification" component = {Classification}></Route>
                        <Route path="/detail" component = {Detail}></Route>
                        <Redirect to="/home"></Redirect>
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}
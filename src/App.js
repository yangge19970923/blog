import React, {Component} from "react"
import {BrowserRouter, Route, Switch} from "react-router-dom"
import LeftNav from './components/left-nav'
import Home from './pages/home'

export default class App extends Component {
    render () {
        return (
            <div className="app">
                <LeftNav />
                <BrowserRouter>
                    <Switch>
                        <Route path="/" component={Home}></Route>
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}
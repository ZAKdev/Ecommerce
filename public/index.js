// For borwser compatibility
import 'babel-polyfill';

import { Router, Route, hashHistory } from 'react-router';
import { connect, Provider } from "react-redux";
const
    React = require("react"),
    ReactDOM = require("react-dom"),
    reduxStore = require("./reduxStore"),
    AppRoute = require("./App/AppRoute"),
    HomeRoute = require("./Home/HomeRoute"),
    DetailRoute = require("./Detail/DetailRoute"),
    LoginRoute = require("./Admin/Login/LoginRoute");

ReactDOM.render(
    <Provider store={reduxStore}>
        <Router history={hashHistory}>
            <Route component={AppRoute}>
                <Route path="/" component={HomeRoute}/>
                <Route path="/product/:id" component={DetailRoute}/>
                <Route path="/admin/login" component={LoginRoute}/>
            </Route>
        </Router>
    </Provider>
    , document.getElementById("mount-node")
)

window.reduxStore = reduxStore;
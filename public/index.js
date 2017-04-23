import './index.styl';

// For borwser compatibility
import 'babel-polyfill';
import React from "react";
import { Router, Route, hashHistory } from 'react-router';
import { connect, Provider } from "react-redux";
import ReactDOM from "react-dom";

import configureStore from './reduxStore';
import AppContainer from "./App/AppContainer";
import HomeContainer from "./Home/HomeContainer";
import DetailContainer from "./Detail/DetailContainer";
import LoginContainer from "./Admin/Login/LoginContainer";

const reduxStore = configureStore();

ReactDOM.render(
    <Provider store={reduxStore}>
        <Router history={hashHistory}>
            <Route component={AppContainer}>
                <Route path="/" component={HomeContainer}/>
                <Route path="/product/:id" component={DetailContainer}/>
                <Route path="/admin/login" component={LoginContainer}/>
            </Route>
        </Router>
    </Provider>
    , document.getElementById("mount-node")
)

window.reduxStore = reduxStore;
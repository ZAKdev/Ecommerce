import { createStore, applyMiddleware, combineReducers } from 'redux';

const
    Redux = require("redux"),
    ReduxThunk = require("redux-thunk").default,
    AppReducer = require("./App/AppReducer");

module.exports = createStore(combineReducers({
    app: AppReducer
}), applyMiddleware(ReduxThunk));
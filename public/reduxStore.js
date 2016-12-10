import { createStore, applyMiddleware, combineReducers } from 'redux';

const
    Redux = require("redux"),
    ReduxThunk = require("redux-thunk").default,
    AppReducer = require("./App/AppReducer"),
    AdminReducer = require("./Admin/AdminReducer");

module.exports = createStore(combineReducers({
    app: AppReducer,
    admin: AdminReducer
}), applyMiddleware(ReduxThunk));
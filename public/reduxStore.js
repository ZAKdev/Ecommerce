import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from "redux-thunk";

import AppReducer from "./App/AppReducer";
import AdminReducer from "./Admin/AdminReducer";

export default () => createStore(combineReducers({
	App: AppReducer,
    admin: AdminReducer
}), applyMiddleware(thunk));
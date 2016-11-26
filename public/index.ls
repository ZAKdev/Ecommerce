{create-factory, DOM:{div}}:React = require \React
require! \React-DOM
require! \React-Router
require! \React-Redux
ReactRedux = require \react-redux
reduxStore = require \./reduxStore.ls
require! \./App/AppRoute.ls
require! \./Home/HomeRoute.ls
require! \./Detail/DetailRoute.ls
create-hash-history = require \history/lib/createHashHistory

Route = create-factory React-Router.Route
Router = create-factory React-Router.Router
Provider = create-factory ReactRedux.Provider

window.reduxStore = reduxStore

ReactDOM.render do
    Provider do
        store: reduxStore
        Router do
            history: create-hash-history.default!
            Route do
                component: AppRoute
                Route {path: \/, component: HomeRoute}
                Route {path: \/products/:id, component: DetailRoute}
    document.get-element-by-id \mount-node
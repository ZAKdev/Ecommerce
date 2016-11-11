{create-factory, DOM:{div}}:React = require \React
require! \React-DOM
require! \React-Router
require! \./App/AppRoute.ls
require! \./Home/HomeRoute.ls
create-hash-history = require \history/lib/createHashHistory

Route = create-factory React-Router.Route
Router = create-factory React-Router.Router

ReactDOM.render do
    Router do
        history: create-hash-history.default!
        Route do
            component: AppRoute
            Route {path: \/, component: HomeRoute}
    document.get-element-by-id \mount-node
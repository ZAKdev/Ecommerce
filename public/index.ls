{create-factory, DOM:{div}}:React = require \React
require! \React-DOM
require! \React-Router
require! \./App/AppRoute.ls
create-hash-history = require \history/lib/createHashHistory

Route = create-factory React-Router.Route
Router = create-factory React-Router.Router

ReactDOM.render do
    Router do
        history: create-hash-history.default!
        Route do
            path: \/
            component: AppRoute
            Route {path: \/product, component: AppRoute}
    document.get-element-by-id \mount-node
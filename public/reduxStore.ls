require! \Redux
ApplyMiddleware = Redux.apply-middleware
ReduxThunk = require \redux-thunk
AppReducer = require \./App/AppReducer.ls

module.exports = Redux.create-store do
    Redux.combine-reducers do
        app: AppReducer
    ApplyMiddleware(ReduxThunk.default)
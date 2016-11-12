{DOM:{div, section}}:React = require \React
{connect} = require \react-redux
AppActions = require \./AppActions.ls
Header = React.create-factory require \./Header.ls
ProductTile = React.create-factory require \../components/ProductTile.ls

AppRoute = React.create-class do
    render: ->
        section null,
            Header do
                #logo: \https://facebook.github.io/react/img/logo.svg
                text: "Logo Here"
            @props.children
    
    component-did-mount: ->
        @props.loadAppAction()

mapStateToProps = (state) ->  do
    app: state.app

mapDispatchToProps = (dispatch) -> do
    loadAppAction: -> dispatch do 
        AppActions.loadAppRoute()

module.exports = connect(mapStateToProps, mapDispatchToProps)(AppRoute)
{DOM:{div, section}}:React = require \React
Header = React.create-factory require \./Header.ls
ProductTile = React.create-factory require \../components/ProductTile.ls

module.exports = React.create-class do
    render: ->
        section null,
            Header do
                #logo: \https://facebook.github.io/react/img/logo.svg
                text: "Logo Here"
                menuItem: "Home"
            @props.children
{DOM:{div}}:React = require \React
Banner = React.create-factory require \./Banner.ls
ProductTile = React.create-factory require \../components/ProductTile.ls

module.exports = React.create-class do
    render: ->
        div {class-name: \HomeRoute},
            Banner do
                slogan: "My Slogan Here"
            ProductTile do
                image: \https://facebook.github.io/react/img/logo.svg
                name: "My First Product"
                price: "$95"
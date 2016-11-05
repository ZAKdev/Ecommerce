{DOM:{div, section}}:React = require \React
Header = React.create-factory require \./Header.ls
Banner = React.create-factory require \./Banner.ls
ProductTile = React.create-factory require \../components/ProductTile.ls

module.exports = React.create-class do
    render: ->
        section null,
            Header do
                #logo: \https://facebook.github.io/react/img/logo.svg
                text: "Logo Here"
            Banner do
                slogan: "Your Slogan Here"
            ProductTile do
                image: \https://facebook.github.io/react/img/logo.svg
                name: "My First Product"
                price: "$95"
{DOM:{div}}:React = require \React
Banner = React.create-factory require \./Banner.ls
ProductTile = React.create-factory require \../components/ProductTile.ls

module.exports = React.create-class do
    render: ->
        div {class-name: \HomeRoute},
            Banner do
                slogan: "My Slogan Here"
                align: "right"
                color: "#000"
            div {class-name: \productList},    
                ProductTile do
                    image: \https://facebook.github.io/react/img/logo.svg
                    name: "My First Product"
                    price: "$95"
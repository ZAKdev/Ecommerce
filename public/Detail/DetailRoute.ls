{DOM:{div}}:React = require \React
ProductDetail = React.create-factory require \./ProductDetail.ls

module.exports = React.create-class do
    render: ->
        div {class-name: \DetailRoute},
            ProductDetail do
                image: \https://facebook.github.io/react/img/logo.svg
                name: "My First Product"
                price: "$95"
                href: "/#/products/1"
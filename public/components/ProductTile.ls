{DOM:{div, img, h2, a, span, article}}:React = require \React

module.exports = React.create-class do
    render: ->
        article {class-name: \Product},
            img {src: @props.image}
            div {class-name: \flex-grid}
                h2 null
                @props.name
                span null
                @props.price
            div {class-name: \flex-grid}
                a {href: \javascript:;}, "view detail"
                a {href: \javascript:;}, "Add to cart"
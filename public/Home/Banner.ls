{DOM:{div}}:React = require \React

module.exports = React.create-class do
    render: ->
        div {class-name: "banner", style: {text-align: @props.align, color: @props.color}},
            @props.slogan
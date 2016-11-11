{DOM:{div}}:React = require \React

module.exports = React.create-class do
    render: ->
        div {class-name: \banner},
            @props.slogan